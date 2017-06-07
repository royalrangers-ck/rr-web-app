(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsExpeditionSegment);

    function AchievementsExpeditionSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements/expedition', 'achievements.expedition')
            .within('achievements')
            .segment('expedition', {
                templateUrl: 'achievements/expedition/adventure.html',
                controller: 'AchievementsExpeditionController',
                controllerAs: 'vm'
            });
    }
})();
