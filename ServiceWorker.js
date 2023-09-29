const appCacheNames = "app-cache";
const assets = [
  "/",
  "/index.html",
  "/App.js",
  "/script.js",
  "/style.css",
  "/manifest.json",
  "/icons/icon128.png",
  "/icons/icon512.png",
];

//install
self.addEventListener("install", (event) => {
  console.log("service worker installed", event);
  event.waitUntil(
    caches.open(appCacheNames).then((cache) => {
      console.log("caching assets");
      cache.addAll(assets);
    })
  );
});

//activate
self.addEventListener("activate", (event) => {
  console.log("service worker activated", event);
});

//fetch
self.addEventListener("fetch", (event) => {
  console.log("fetch event", event);
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      return cacheResponse || fetch(event.request);
    })
  );
});
