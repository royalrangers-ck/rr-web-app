(() => {

    'use strict';

    angular
        .module('app')
        .config(PlatoonSegment);

    function PlatoonSegment ($routeSegmentProvider) {

        $routeSegmentProvider.when('/platoon', 'platoon').segment('platoon', {
            templateUrl: 'platoon/platoon.html',
            controller: 'PlatoonController'
        });
    }
})();