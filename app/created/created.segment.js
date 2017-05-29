(() => {

    'use strict';

    angular
        .module('app')
        .config(CreatedSegment);

    function CreatedSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/created', 'created').segment('created', {
            templateUrl: 'created/created.html',
            controller: 'CreatedController'
        });
    }
})();