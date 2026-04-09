// Helper to trigger push notifications from API routes

export async function sendPushNotification({
  tripId,
  title,
  body,
  url,
  tag,
  participantIds,
}: {
  tripId: string
  title: string
  body: string
  url?: string
  tag?: string
  participantIds?: string[]
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  try {
    await fetch(`${baseUrl}/api/push/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tripId, title, body, url, tag, participantIds }),
    })
  } catch (err) {
    // Non-fatal — push notifications are best-effort
    console.error('Push notification send failed:', err)
  }
}
