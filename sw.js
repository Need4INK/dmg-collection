// Keeps the app working offline. Bump VERSION on every release so phones pick up the new files.
const VERSION = 'v33';
const FILES = ['./', 'index.html', 'data.js', 'manifest.webmanifest',
  'icons/dmgdb3-180.png', 'icons/dmgdb3-192.png', 'icons/dmgdb3-512.png',
  'icons/dmgdb3-maskable-192.png', 'icons/dmgdb3-maskable-512.png',
  'fonts/jost-latin-500-normal.woff2', 'fonts/jost-latin-700-normal.woff2',
  'fonts/inter-latin-400-normal.woff2',
  'fonts/inter-latin-600-normal.woff2', 'fonts/pixelify-sans-latin-600-normal.woff2'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Network first when online, skipping the browser's HTTP cache so updates show up at once; cached copy when offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request.url, { cache: 'no-cache' }).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
