(() => {

    'use strict';

    angular
        .module('app')
        .config(SettingsSegment);

    function SettingsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/settings', 'settings').segment('settings', {
            templateUrl: 'settings/settings.html',
            controller: 'SettingsController'
        });
    }
})();