// self.addEventListener('install', evt =>{
//     console.log(evt);
// })
// self.addEventListener('activate', evt =>{
//     console.log(evt); 
// })
self.addEventListener('fetch', evt => {
    if (!navigator.onLine) {
        console.log(evt.request.url);
        evt.respondWith(
            caches.match(evt.request).then(
                rep => {
                    if(rep){
                        console.log(rep);
                        return rep;
                    } else {
                        console.log('no rep');
                    }
                    return fetch(evt.request).then(
                        newResponse => {
                            console.log(newResponse);
                            caches.open('PWA').then(
                                cache => cache.put(evt.request, newResponse)
                            );
                            return newResponse;
                        }
                    )
                }
            )
        );
    }
})