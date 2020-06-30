


self.addEventListener('install', (event) => {
    console.log(event)
    event.waitUntil(
        caches.open('performance')
            .then(cache=>cache.addAll([
<<<<<<< HEAD

                'index.html',
                'generic.html',
                'elements.html',
=======
                '/',
                '/index.html',
                '/generic.html',
                '/elements.html',
>>>>>>> origin/master
                '/js/jquerycritical.js',
                '/js/jquery.scrolly.js',
                '/js/main.js',
                '/js/skel.js',
                '/js/util.js',
                'favicon.ico',
                '/css/styleminify.css',
<<<<<<< HEAD
                'manifest.webmanifest',
                'favicon16.png',
                'favicon192.png',
                'favicon512.png',

=======
                '/manifest.webmanifest',
                '/images/banner.jpg',
                '/images/bg.jpg',
                '/images/pic01.jpg',
                '/images/pic02.jpg',
                '/images/pic03.jpg',
                '/images/pic04.jpg',
                '/images/pic05.jpg',
                '/images/pic06.jpg',
                '/images/pic07.webp',
                '/images/pic08.webp',
                '/images/pic09.webp',
                '/images/pic10.webp',
                '/images/pic11.webp',
                '/fonts/FontAwesome.otf',
                '/fonts/fontawesome-webfont.eot',
                '/fonts/fontawesome-webfont.svg',
                '/fonts/fontawesome-webfont.ttf',
                '/fonts/fontawesome-webfont.woff',
                '/fonts/fontawesome-webfont.woff2',
                '/fonts/font-awesome.css',
>>>>>>> origin/master




            ]))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
<<<<<<< HEAD
        caches.open('performance').then((cache) => {
=======
        caches.open('fxcalc-v1').then((cache) => {
>>>>>>> origin/master
            returnfetch(event.request)
                .then((response) => {
                    cache.put(event.request, response.clone());
                    return response;
                })
                .catch(() =>cache.match(event.request));
        })
    );
});

