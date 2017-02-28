(() => {

    'use strict';

    angular
        .module('app')
        .config($inject);

    $inject.$inject = ['$routeSegmentProvider', '$routeProvider'];
    function HomeSegment($routeSegmentProvider, $routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider.when('/', 'locator').segment('locator', {
            templateUrl: 'locator/locator.html',
            controller: 'LocatorController'
        });
    }
})();