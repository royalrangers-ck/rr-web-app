(() => {

    'use strict';

    angular
        .module('admin')
        .config(Config);

    function Config($httpProvider, $logProvider, $locationProvider, growlProvider, $routeProvider, $routeSegmentProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
        $httpProvider.interceptors.push('ErrorInterceptor');
        $httpProvider.defaults.withCredentials = true;

        // Configure application logs messages
        $logProvider.debugEnabled(true);

        // Configure prefix for hash part
        $locationProvider.hashPrefix('');

        // Configure Time to live Countdown
        growlProvider.globalTimeToLive({success: 1000, error: 2000, warning: 3000, info: 4000});
        growlProvider.globalPosition('top-center');
        growlProvider.globalDisableCountDown(true);

        // Configure routes
        $routeProvider.otherwise({redirectTo: '/'});
        $routeSegmentProvider.options.autoLoadTemplates = true;
    }
})();
