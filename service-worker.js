// Service Worker minimal pour PWA
self.addEventListener('install', event => {
  console.log('Service Worker installé ✅');
  self.skipWaiting(); // active immédiatement
});

self.addEventListener('activate', event => {
  console.log('Service Worker activé ✅');
});

self.addEventListener('fetch', event => {
  // Pour l’instant, laisse juste passer toutes les requêtes
  event.respondWith(fetch(event.request));
});
