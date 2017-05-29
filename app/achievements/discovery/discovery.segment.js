(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsDiscoverySegment);

    AchievementsDiscoverySegment.$inject = ['$routeSegmentProvider'];
    function AchievementsDiscoverySegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements/discovery', 'achievements.discovery')
            .within('achievements')
            .segment('discovery', {
                'default': true,
                templateUrl: 'achievements/discovery/discovery.html',
                controller: 'AchievementsDiscoveryController',
                controllerAs: 'vm'
            });
    }
})();
