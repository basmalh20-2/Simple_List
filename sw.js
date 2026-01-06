const cacheName = 'todo-cache-v1';
const filesToCache = [
    'index.html',
    'style.css',
    'javas.js',
    'small.png',
    'large.png',
    'empty massage.JPG',
    'Landscape, sunset in the sky against the mountains, mountain ranges during sunset _ Premium Photo.jpeg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
        return response || fetch(event.request).catch(() => {
            // لو أوفلاين والملف مش موجود في cache، ارجع الصفحة الرئيسية
            return caches.match('index.html');
        });
        })
    );
});


