import { Resend } from 'resend'

let resendClient: Resend | null = null

function getResend(): Resend {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY
    if (!key) throw new Error('Missing RESEND_API_KEY')
    resendClient = new Resend(key)
  }
  return resendClient
}

const FROM = 'FairwayPal <trips@fairwaypal.com>'

export async function sendDailySummary(params: {
  to: string
  tripName: string
  subject: string
  votedCount: number
  totalCount: number
  conflictCount: number
  nonVoterNames: string[]
  tripUrl: string
}) {
  const resend = getResend()
  const { to, tripName, subject, votedCount, totalCount, conflictCount, nonVoterNames, tripUrl } = params

  const body = [
    `<h2 style="font-family:Georgia,serif;font-weight:300;color:#f0ede6">${tripName}</h2>`,
    `<p style="color:#c8c4bc">Here's where things stand:</p>`,
    `<ul style="color:#c8c4bc">`,
    `<li><strong>${votedCount}</strong> of ${totalCount} people have voted</li>`,
    conflictCount > 0
      ? `<li><strong>${conflictCount}</strong> activities have pushback</li>`
      : '',
    nonVoterNames.length > 0
      ? `<li>Still waiting on: ${nonVoterNames.join(', ')}</li>`
      : '<li>Everyone has voted!</li>',
    `</ul>`,
    `<a href="${tripUrl}" style="display:inline-block;padding:12px 24px;background:#c9a84c;color:#0a0a08;text-decoration:none;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-weight:700;margin-top:16px">View Dashboard</a>`,
  ]
    .filter(Boolean)
    .join('\n')

  const html = `<div style="background:#0a0a08;padding:32px;font-family:sans-serif">${body}</div>`

  return resend.emails.send({
    from: FROM,
    to,
    subject,
    html,
  })
}

export async function sendAllVotedEmail(params: {
  to: string
  tripName: string
  tripUrl: string
}) {
  const resend = getResend()
  const { to, tripName, tripUrl } = params

  const subject = `${tripName} · everyone's in · ready to lock`

  const html = `<div style="background:#0a0a08;padding:32px;font-family:sans-serif">
    <h2 style="font-family:Georgia,serif;font-weight:300;color:#f0ede6">${tripName}</h2>
    <p style="color:#c8c4bc">That's everyone in. All participants have voted on the trip.</p>
    <p style="color:#c8c4bc">Ready to lock it in?</p>
    <a href="${tripUrl}" style="display:inline-block;padding:12px 24px;background:#c9a84c;color:#0a0a08;text-decoration:none;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-weight:700;margin-top:16px">Lock It In</a>
  </div>`

  return resend.emails.send({
    from: FROM,
    to,
    subject,
    html,
  })
}

export function generateSubjectLine(params: {
  tripName: string
  allVoted: boolean
  conflictCount: number
  nonVoterCount: number
}): string {
  const { tripName, allVoted, conflictCount, nonVoterCount } = params

  if (allVoted) {
    return `${tripName} · everyone's in · ready to lock`
  }
  if (conflictCount > 0) {
    return `${tripName} · ${conflictCount} conflict${conflictCount > 1 ? 's' : ''} need your call`
  }
  if (nonVoterCount > 3) {
    return `${tripName} · still waiting on ${nonVoterCount} people`
  }
  return `${tripName} · quiet day · ${nonVoterCount} still to vote`
}
