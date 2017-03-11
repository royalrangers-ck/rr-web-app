(() => {

    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$httpProvider', '$logProvider', '$locationProvider', 'growlProvider'];
    function config($httpProvider, $logProvider, $locationProvider, growlProvider) {
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
})();
