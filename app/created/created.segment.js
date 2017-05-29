(() => {

    'use strict';

    angular
        .module('app')
        .config(CreatedSegment);

    CreatedSegment.$inject = ['$routeSegmentProvider'];
    function CreatedSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/created', 'created').segment('created', {
            'default': true,
            templateUrl: 'created/created.html',
            controller: 'CreatedController'
        });
    }
})();