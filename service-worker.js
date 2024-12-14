self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('daily-schedule-v1').then((cache) => {
        return cache.addAll([
          './',
          './mySchedule.html',
          './manifest.json',
          './idea.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  