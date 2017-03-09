(() => {

    'use strict';

    angular
        .module('app')
        .config(LocatorSegment);

    LocatorSegment.$inject = ['$routeSegmentProvider'];
    function LocatorSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/locator', 'landing.locator').within('landing').segment('locator', {
            templateUrl: 'landing/locator/locator.html',
            controller: 'LocatorController'
        });
    }
})();