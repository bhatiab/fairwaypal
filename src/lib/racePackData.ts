import { RACES } from '@/lib/races'
import { miamiPlannerData } from '@/data/miamiPlannerData'
import { montrealPlannerData } from '@/data/montrealPlannerData'
import { miamiExperiencesData } from '@/data/miamiExperiencesData'
import { montrealExperiencesData } from '@/data/montrealExperiencesData'

export interface PackStayArea {
  slug: string
  name: string
  suits: string
  commute: string
  atmosphere: string
  pros: string
  cons: string
  style: string
}

export interface PackSession {
  name: string
  date: string
  startTime: string
  endTime: string
  isMainRace: boolean
  isSprint: boolean
}

export interface PackTransport {
  name: string
  type: string
  tip: string
}

export interface PackExperience {
  label: string
  desc: string
}

export interface RacePackData {
  raceSlug: string
  raceName: string
  city: string
  country: string
  fridayDate: string
  sundayDate: string
  area: PackStayArea
  allAreas: PackStayArea[]
  sessions: PackSession[]
  gateOpenRaceDay: string
  transport: PackTransport[]
  crowdAvoidanceTip: string
  experiences: PackExperience[]
  packingList: string[]
  weatherSummary: string
  weatherRisks: string[]
  knownIssues: string[]
  midRangeBudget: string
}

const MIAMI_AREA_SLUGS = ['wynwood', 'south-beach', 'brickell', 'doral']
const MONTREAL_AREA_SLUGS = ['downtown', 'old-montreal', 'plateau', 'south-shore']

export function getRacePackAreas(raceSlug: string): PackStayArea[] {
  if (raceSlug === 'miami-2026') {
    return miamiPlannerData.stayAreas.map((a, i) => ({ slug: MIAMI_AREA_SLUGS[i], ...a }))
  }
  if (raceSlug === 'canada-2026') {
    return montrealPlannerData.stayAreas.map((a, i) => ({ slug: MONTREAL_AREA_SLUGS[i], ...a }))
  }
  return []
}

export function getRacePackData(raceSlug: string, areaSlug: string): RacePackData | null {
  const race = RACES[raceSlug]
  if (!race) return null

  const areas = getRacePackAreas(raceSlug)
  const area = areas.find(a => a.slug === areaSlug)
  if (!area) return null

  const { routeConfig } = race
  const fridayDate = routeConfig.sessions[0].date
  const sundayDate = routeConfig.sessions.find(s => s.isMainRace)?.date ?? routeConfig.sessions.at(-1)!.date
  const raceDayGate = routeConfig.gates.find(g => g.date === sundayDate)
  const mainCrowdWindow = routeConfig.crowdWindows.find(w => w.severity === 'heavy') ?? routeConfig.crowdWindows[0]

  const plannerData = raceSlug === 'miami-2026' ? miamiPlannerData : montrealPlannerData
  const experiencesData = raceSlug === 'miami-2026' ? miamiExperiencesData : montrealExperiencesData

  return {
    raceSlug,
    raceName: race.name,
    city: race.city,
    country: race.country,
    fridayDate,
    sundayDate,
    area,
    allAreas: areas,
    sessions: routeConfig.sessions.map(s => ({
      name: s.name,
      date: s.date,
      startTime: s.startTime,
      endTime: s.endTime,
      isMainRace: s.isMainRace,
      isSprint: s.isSprint,
    })),
    gateOpenRaceDay: raceDayGate?.openTime ?? '07:30',
    transport: routeConfig.transport.map(t => ({
      name: t.name,
      type: t.type,
      tip: t.raceDay.tip,
    })),
    crowdAvoidanceTip: mainCrowdWindow?.avoidanceStrategy ?? '',
    experiences: experiencesData.quickPicks.map(q => ({
      label: q.label,
      desc: q.desc,
    })),
    packingList: plannerData.packingList,
    weatherSummary: routeConfig.weatherProfile.typical,
    weatherRisks: routeConfig.weatherProfile.risks,
    knownIssues: routeConfig.knownIssues,
    midRangeBudget: plannerData.budgetTiers[1]?.total ?? '',
  }
}

/** Format "2026-05-01" → "Friday 1 May 2026" */
export function formatPackDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

/** Format "2026-05-01" → "Fri 1 May" (short) */
export function formatPackDateShort(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
}
