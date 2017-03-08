(() => {

    'use strict';

    angular
        .module('app')
        .config(SettingsSegment);

    SettingsSegment.$inject = ['$routeSegmentProvider'];
    function SettingsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/app/settings', 'app.settings').within('app').segment('settings', {
            templateUrl: 'app/settings/settings.html',
            controller: 'SettingsController'
        });
    }
})();