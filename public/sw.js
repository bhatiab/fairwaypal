// FairwayPal Push Notification Service Worker
// This file must live at /sw.js (public/sw.js) for scope reasons

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {}

  const title = data.title || 'FairwayPal'
  const options = {
    body: data.body || '',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    tag: data.tag || 'fairwaypal',
    data: {
      url: data.url || '/',
    },
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  const url = event.notification.data?.url || '/'

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Focus existing tab if open
      for (const client of windowClients) {
        if (client.url.includes(url) && 'focus' in client) {
          return client.focus()
        }
      }
      // Otherwise open new tab
      if (clients.openWindow) {
        return clients.openWindow(url)
      }
    }),
  )
})
