self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('daily-schedule-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/styles.css',  // Include your styles if external
        '/script.js',   // Include your JavaScript if external
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
