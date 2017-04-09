(() => {

    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$httpProvider', '$logProvider', '$locationProvider', 'growlProvider'];
    function config($httpProvider, $logProvider, $locationProvider, growlProvider) {
        $httpProvider.interceptors.push('ErrorInterceptor');
        $httpProvider.defaults.withCredentials = true;

        // Configure application logs messages
        $logProvider.debugEnabled(true);

        // Configure prefix for hash part
        $locationProvider.hashPrefix('');

        // Configure notification
        growlProvider.globalTimeToLive(5000);
        growlProvider.globalPosition('top-center');
    }
})();
