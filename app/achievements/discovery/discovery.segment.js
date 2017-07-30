(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsDiscoverySegment);

    function AchievementsDiscoverySegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements/discovery', 'achievements.discovery')
            .within('achievements')
            .segment('discovery', {
                templateUrl: 'achievements/discovery/discovery.html',
                controller: 'AchievementsDiscoveryController',
                controllerAs: 'vm'
            });
    }
})();
