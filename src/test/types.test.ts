import { describe, it, expect } from 'vitest'
import {
  calculateNights,
  formatBudgetLabel,
  intakeSchema,
  generateRequestSchema,
  generatedItinerarySchema,
  activitySchema,
  PARTICIPANT_COLORS,
} from '@/types/trip'

describe('calculateNights', () => {
  it('calculates correct nights between two dates', () => {
    expect(calculateNights('2025-04-18', '2025-04-20')).toBe(2)
    expect(calculateNights('2025-04-18', '2025-04-21')).toBe(3)
  })

  it('returns 0 for invalid or empty dates', () => {
    expect(calculateNights('', '')).toBe(0)
    expect(calculateNights('2025-04-20', '2025-04-18')).toBe(0)
    expect(calculateNights('invalid', '2025-04-20')).toBe(0)
  })
})

describe('formatBudgetLabel', () => {
  it('returns correct tier labels', () => {
    expect(formatBudgetLabel(75)).toBe('Budget')
    expect(formatBudgetLabel(150)).toBe('Mid-range')
    expect(formatBudgetLabel(250)).toBe('Premium')
    expect(formatBudgetLabel(350)).toBe('Bucket list')
  })
})

describe('intakeSchema', () => {
  it('validates valid intake data', () => {
    const result = intakeSchema.safeParse({
      destination: 'Scottsdale, AZ',
      datesStart: '2025-04-18',
      datesEnd: '2025-04-20',
      golfers: 4,
      partners: 2,
      budgetPerRound: 200,
      vibe: 'mixed',
    })
    expect(result.success).toBe(true)
  })

  it('rejects invalid intake data', () => {
    const result = intakeSchema.safeParse({
      destination: '',
      datesStart: 'invalid',
      datesEnd: '2025-04-20',
      golfers: 1, // min 2
      partners: -1,
      budgetPerRound: 30, // min 50
      vibe: 'invalid',
    })
    expect(result.success).toBe(false)
  })

  it('requires all vibes to be valid', () => {
    for (const vibe of ['serious-golf', 'full-send', 'mixed']) {
      const result = intakeSchema.safeParse({
        destination: 'Test',
        datesStart: '2025-04-18',
        datesEnd: '2025-04-20',
        golfers: 2,
        partners: 0,
        budgetPerRound: 100,
        vibe,
      })
      expect(result.success).toBe(true)
    }
  })
})

describe('generateRequestSchema', () => {
  it('requires organiserUuid', () => {
    const result = generateRequestSchema.safeParse({
      destination: 'Scottsdale',
      datesStart: '2025-04-18',
      datesEnd: '2025-04-20',
      golfers: 4,
      partners: 0,
      budgetPerRound: 150,
      vibe: 'mixed',
      organiserUuid: '550e8400-e29b-41d4-a716-446655440000',
    })
    expect(result.success).toBe(true)
  })

  it('rejects missing organiserUuid', () => {
    const result = generateRequestSchema.safeParse({
      destination: 'Scottsdale',
      datesStart: '2025-04-18',
      datesEnd: '2025-04-20',
      golfers: 4,
      partners: 0,
      budgetPerRound: 150,
      vibe: 'mixed',
    })
    expect(result.success).toBe(false)
  })
})

describe('activitySchema', () => {
  it('validates a well-formed activity', () => {
    const result = activitySchema.safeParse({
      name: 'Troon North Monument',
      detail: 'Desert target golf at its best',
      timeOfDay: '7:10 AM',
      estimatedPrice: 185,
      priceUnit: 'per-round',
      tags: ['championship', 'desert'],
      aiRationale: 'Top-rated desert course in Scottsdale',
    })
    expect(result.success).toBe(true)
  })

  it('requires all fields', () => {
    const result = activitySchema.safeParse({
      name: 'Test',
    })
    expect(result.success).toBe(false)
  })
})

describe('generatedItinerarySchema', () => {
  it('validates a complete itinerary', () => {
    const result = generatedItinerarySchema.safeParse({
      tripName: 'Desert Links Weekend',
      days: [
        {
          dayIndex: 0,
          dayLabel: 'Friday',
          dateLabel: 'Apr 18',
          golfActivities: [
            {
              name: 'Troon North',
              detail: 'Morning round',
              timeOfDay: '7:00 AM',
              estimatedPrice: 185,
              priceUnit: 'per-round',
              tags: ['championship'],
              aiRationale: 'Best course for your budget',
            },
          ],
          partnerActivities: [],
          sharedActivities: [],
        },
      ],
      estimatedBudgetPerGolfer: 800,
      estimatedBudgetPerPartner: 400,
    })
    expect(result.success).toBe(true)
  })
})

describe('PARTICIPANT_COLORS', () => {
  it('has at least 8 colors', () => {
    expect(PARTICIPANT_COLORS.length).toBeGreaterThanOrEqual(8)
  })

  it('all start with #', () => {
    for (const c of PARTICIPANT_COLORS) {
      expect(c).toMatch(/^#/)
    }
  })
})
