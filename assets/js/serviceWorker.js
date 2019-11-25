const VERSION = "1";
const ORIGIN = location.protocol + '//' + location.hostname;

const STATIC_CACHE_KEY = 'static-' + VERSION;
const STATIC_FILES = [
    ORIGIN + '/',
    ORIGIN + '/assets/css/main.css',
    ORIGIN + '/assets/js/analytics.js',
    ORIGIN + '/assets/js/serviceWorker.js',
    ORIGIN + '/assets/img/me.jpg',
];
const CACHE_KEYS = [
    STATIC_CACHE_KEY
];

self.addEventListener( 'install', event =>
{
    event.waitUntil(
        caches.open( STATIC_CACHE_KEY ).then( cache =>
        {
            return Promise.all(
                STATIC_FILES.map( url =>
                {
                    return fetch( new Request( url, { cache: 'no-cache', mode: 'no-cors' } ) ).then( response =>
                    {
                        return cache.put( url, response );
                    } );
                } )
            );
        } )
    );
} );

self.addEventListener( 'activate', event =>
{
    event.waitUntil(
        caches.keys().then( ( cacheNames ) =>
        {
            return cacheNames.filter( ( cacheName ) =>
            {
                // STATIC_CACHE_KEYではないキャッシュを探す
                return cacheName !== STATIC_CACHE_KEY;
            } );
        } ).then( ( cachesToDelete ) =>
        {
            return Promise.all( cachesToDelete.map( ( cacheName ) =>
            {
                // いらないキャッシュを削除する
                return caches.delete( cacheName );
            } ) );
        } )
    );
} );

self.addEventListener( 'fetch', event =>
{
    // POSTの場合はキャッシュを使用しない
    if ( 'POST' === event.request.method )
    {
        return;
    }

    event.respondWith(
        caches.match( event.request )
            .then( ( response ) =>
            {
                // キャッシュ内に該当レスポンスがあれば、それを返す
                if ( response )
                {
                    return response;
                }

                // 重要：リクエストを clone する。リクエストは Stream なので
                // 一度しか処理できない。ここではキャッシュ用、fetch 用と2回
                // 必要なので、リクエストは clone しないといけない
                let fetchRequest = event.request.clone();

                return fetch( fetchRequest )
                    .then( ( response ) =>
                    {
                        if ( !response || response.status !== 200 || response.type !== 'basic' )
                        {
                            // キャッシュする必要のないタイプのレスポンスならそのまま返す
                            return response;
                        }

                        // 重要：レスポンスを clone する。レスポンスは Stream で
                        // ブラウザ用とキャッシュ用の2回必要。なので clone して
                        // 2つの Stream があるようにする
                        let responseToCache = response.clone();

                        caches.open( STATIC_CACHE_KEY )
                            .then( ( cache ) =>
                            {
                                cache.put( event.request, responseToCache );
                            } );

                        return response;
                    } );
            } )
    );
} );
