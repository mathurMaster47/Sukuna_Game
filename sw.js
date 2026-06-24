const CACHE_NAME = 'sukuna-v1';
const ASSETS = [
  'main.html',
  'matter.min.js',
  'icon.png',
  'tier1.png',
  'tier2.png',
  'tier3.png',
  'tier4.png',
  'tier5.png',
  'tier6.png',
  'tier7.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});