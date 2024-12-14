self.addEventListener('install', (e) => {
  e.waitUntil(
      caches.open('daily-schedule-v1').then((cache) => {
          // Cache files
          return cache.addAll([
              './',
              './index.html',
              './manifest.json',
              './idea.png',
          ]);
      })
  );
});

self.addEventListener('activate', (e) => {
  const cacheWhitelist = ['daily-schedule-v1'];
  e.waitUntil(
      caches.keys().then((cacheNames) => {
          return Promise.all(
              cacheNames.map((cacheName) => {
                  if (!cacheWhitelist.includes(cacheName)) {
                      return caches.delete(cacheName);
                  }
              })
          );
      })
  );
});
