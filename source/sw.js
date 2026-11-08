// Retires the service worker left behind by the old Chirpy (Jekyll) site.
// Browsers that still have it installed fetch this file on their next visit,
// which clears its offline cache, unregisters it, and reloads open tabs
// so they show the current Hexo site.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((c) => c.navigate(c.url));
  })());
});
