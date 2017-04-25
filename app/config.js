(() => {

    'use strict';

    angular
        .module('app')
        .config(config)
        .run(run);

    config.$inject = ['$httpProvider', '$logProvider', '$locationProvider', 'growlProvider', 'KeepaliveProvider'];
    function config($httpProvider, $logProvider, $locationProvider, growlProvider, KeepaliveProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
        $httpProvider.interceptors.push('ErrorInterceptor');
        $httpProvider.defaults.withCredentials = true;

        // Configure application logs messages
        $logProvider.debugEnabled(true);

        // Configure prefix for hash part
        $locationProvider.hashPrefix('');

        growlProvider.globalTimeToLive({success: 1000, error: 2000, warning: 3000, info: 4000});
        growlProvider.globalPosition('top-center');

        // Configure idle users
        // TODO: update health api url
        KeepaliveProvider.http('/api/public/cities');
        KeepaliveProvider.interval(10); // sec
    }

    run.$inject = ['$rootScope', '$http', 'Endpoints', '$window', 'Keepalive'];
    function run($rootScope, $http, Endpoints, $window, Keepalive) {
        // Starts pinging backend
        Keepalive.start();
        Keepalive.ping();

        $http.get(Endpoints.USER).then((res) => {
            if (res.data.success) {
                $rootScope.currentUser = res.data.data;
            } else {
                $window.location.pathname = '/';
            }
        });
    }
})();
