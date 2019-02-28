importScripts("/workbox/workbox-sw.js");

workbox.setConfig({
  debug: false,
  modulePathPrefix: "/workbox/"
});

workbox.precaching.precacheAndRoute([]);
