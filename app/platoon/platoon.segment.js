(() => {

    'use strict';

    angular
        .module('app')
        .config(PlatoonSegment);

    PlatoonSegment.$inject = ['$routeSegmentProvider'];
    function PlatoonSegment ($routeSegmentProvider) {

        $routeSegmentProvider.when('/platoon', 'platoon').segment('platoon', {
            'default': true,
            templateUrl: 'platoon/platoon.html',
            controller: 'PlatoonController'
        });
    }
})();