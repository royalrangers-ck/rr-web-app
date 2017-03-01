(() => {

    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$logProvider', '$locationProvider'];
    function config($logProvider, $locationProvider) {
        // Configure application logs messages
        $logProvider.debugEnabled(true);

        // Configure prefix for hash part
        $locationProvider.hashPrefix('');
    }
})();
