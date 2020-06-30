


self.addEventListener('install', (event) => {
    console.log(event)
    event.waitUntil(
        caches.open('performance')
            .then(cache=>cache.addAll([

                'index.html',
                'generic.html',
                'elements.html',
                '/js/jquerycritical.js',
                '/js/jquery.scrolly.js',
                '/js/main.js',
                '/js/skel.js',
                '/js/util.js',
                'favicon.ico',
                '/css/styleminify.css',
                'manifest.webmanifest',
                'favicon16.png',
                'favicon192.png',
                'favicon512.png',





            ]))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open('performance').then((cache) => {
            returnfetch(event.request)
                .then((response) => {
                    cache.put(event.request, response.clone());
                    return response;
                })
                .catch(() =>cache.match(event.request));
        })
    );
});

