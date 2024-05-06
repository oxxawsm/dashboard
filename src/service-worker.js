/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }) => {
    if (request.mode !== 'navigate') {
      return false;
    }

    if (url.pathname.startsWith('/_')) {
      return false;
    }

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.

const cacheName = "pwa-chache";
const filesToCache = [
  "/src",
  "/public"
];

self.addEventListener("install", e => {
  console.log("[ServiceWorker] - Установка");
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("[ServiceWorker] - Кэширование");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", event => {
  caches.keys().then(keyList => {
    return Promise.all(
      keyList.map(key => {
        if (key !== cacheName) {
          console.log("[ServiceWorker] - Удаление старого кэша", key);
          return caches.delete(key);
        }
      })
    );
  });
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('push', () => {
  self.registration.showNotification('Hello world!', options);
});
