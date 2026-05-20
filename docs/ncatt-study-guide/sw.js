const CACHE_NAME = 'ncatt-v2';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './questions_v2.js',
  './calculations.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request).catch(()=>new Response('Offline'));
      })
  );
});
