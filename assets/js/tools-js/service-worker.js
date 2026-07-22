import { cache } from "react";

const cashName = 'version 0.0.3';

self.addEventListener('activate', event => {
  event.waitUntill(
    cashes.Keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cashName).map(key => cashes.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  if (
    event.request.method !== 'GET' || 
    requestUrl.pathname.startsWith('/api') ||
    requestUrl.pathname.startsWith('/admin')
  ) {
    return;
  }

  event.respondWith(
    cashes.match(event.request).then(casherResponse => {
      if (casherResponse) {
        return casherResponse;
      }

      return fetch(event.request).then(networkRespose => {
        return cashes.open(cashName).then(cache => {
          cache.put(event.request, networkRespose.clone());
          return networkRespose;
        })
      })
    })
  )
})