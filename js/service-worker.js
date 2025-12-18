// Service Worker for PWA support

const CACHE_NAME = 'ventistudio-v6-001';
const URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/css/base.css',
    '/css/components.css',
    '/css/layout.css',
    '/css/animations.css',
    '/js/app.js',
    '/js/animations.js',
    '/js/forms.js',
    '/manifest.json'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch event - Cache First Strategy
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(response => {
                if (response.status === 200) {
                    const cache = caches.open(CACHE_NAME);
                    cache.then(c => c.put(event.request, response.clone()));
                }
                return response;
            });
        }).catch(() => {
            return caches.match('/index.html');
        })
    );
});
