(() => {

    'use strict';

    angular
        .module('app')
        .config(LocatorSegment);

    LocatorSegment.$inject = ['$routeSegmentProvider'];
    function LocatorSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/locator', 'locator').segment('locator', {
            templateUrl: 'locator/locator.html',
            controller: 'LocatorController'
        });
    }
})();