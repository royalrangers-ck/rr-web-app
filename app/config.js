(() => {

    'use strict';

    angular
        .module('app')
        .config(config)
        .run(run);

    config.$inject = ['$httpProvider', '$logProvider', '$locationProvider', 'growlProvider'];
    function config($httpProvider, $logProvider, $locationProvider, growlProvider ) {
        $httpProvider.interceptors.push('AuthInterceptor');
        $httpProvider.interceptors.push('ErrorInterceptor');
        $httpProvider.defaults.withCredentials = true;

        // Configure application logs messages
        $logProvider.debugEnabled(true);

        // Configure prefix for hash part
        $locationProvider.hashPrefix('');

        growlProvider.globalTimeToLive({success: 1000, error: 2000, warning: 3000, info: 4000});
        growlProvider.globalPosition('top-center');

    }

    run.$inject = ['$rootScope', '$http', 'Endpoints', '$window'];
    function run($rootScope, $http, Endpoints, $window) {

        $http.get(Endpoints.USER).then((res) => {
            if (res.data.success) {
                $rootScope.currentUser = res.data.data;
            } else {
                $window.location.pathname = '/';
            }
        });
    }
})();
