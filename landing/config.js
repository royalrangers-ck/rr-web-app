(() => {

    'use strict';

    angular
        .module('app')
        .config(config);

    function config($httpProvider, $logProvider, $locationProvider, growlProvider, $qProvider, uiGmapGoogleMapApiProvider) {
        $httpProvider.interceptors.push('ErrorInterceptor');
        $httpProvider.defaults.withCredentials = true;

        // Configure application logs messages
        $logProvider.debugEnabled(true);

        // Configure prefix for hash part
        $locationProvider.hashPrefix('');

        // Configure notification
        growlProvider.globalTimeToLive(5000);
        growlProvider.globalPosition('top-center');

        // Time to live Countdown
        growlProvider.globalDisableCountDown(true);

        // Disable message about unhandled rejection
        $qProvider.errorOnUnhandledRejections(false);

        // Angular google maps
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyCWEmDm4GoFSV2sglSMsWRTVSU-wI_CPaQ',
            v: '3.28',
            libraries: 'weather,geometry,visualization'
        });
    }
})();
