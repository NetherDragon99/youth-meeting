
const cashName = 'version 0.0.4';

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cashName).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  if (
    event.request.method !== 'GET' ||
    requestUrl.pathname.startsWith('/api') ||
    requestUrl.pathname.startsWith('/admin') ||
    (requestUrl.protocol !== 'http:' && requestUrl.protocol !== 'https:')
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(casherResponse => {
      if (casherResponse) {
        return casherResponse;
      }

      return fetch(event.request).then(networkRespose => {
        return caches.open(cashName).then(cache => {
          cache.put(event.request, networkRespose.clone());
          return networkRespose;
        })
      })
    })
  )
})