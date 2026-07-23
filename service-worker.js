import { currentAppVersion } from "./config.js";

const cashName = `version ${currentAppVersion}`;

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cashName).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('install', event => {
  self.skipWaiting();
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