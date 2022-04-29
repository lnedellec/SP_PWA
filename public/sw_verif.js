if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
if (window.caches) {
    caches.open('PWA').then(
        cache => {
            cache.addAll([
                'index.html',
                'script2.js',
                'sw.js'
            ])
        }
    )
}