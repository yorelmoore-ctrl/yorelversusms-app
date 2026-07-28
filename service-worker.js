// Yorel Versus MS Service Worker

const CACHE_NAME = "yorel-versus-ms-v1";


const FILES_TO_CACHE = [

    "./",

    "./index.html",

    "./style.css",

    "./script.js",

    "./manifest.json",

    "./assets/icons/icon-192.png",

    "./assets/icons/icon-512.png"

];




// Install App Files

self.addEventListener(
"install",
event => {


    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => {

            return cache.addAll(
                FILES_TO_CACHE
            );

        })

    );


});






// Load Cached Files

self.addEventListener(
"fetch",
event => {


    event.respondWith(

        caches.match(
            event.request
        )

        .then(response => {


            return response ||

            fetch(
                event.request
            );


        })

    );


});






// Update Cache

self.addEventListener(
"activate",
event => {


    event.waitUntil(

        caches.keys()

        .then(keys => {


            return Promise.all(

                keys.map(key => {


                    if(
                        key !== CACHE_NAME
                    ){

                        return caches.delete(
                            key
                        );

                    }


                })

            );


        })

    );


});