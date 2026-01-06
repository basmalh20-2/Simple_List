const cacheName = 'todo-cache-v2';

const filesToCache = [
    './',
    './index.html',
    './style.css',
    './javas.js',
    './manifest.json',
    './small.png',
    './large.png',
    './empty-massage.JPG'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});


