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
                templateUrl: 'achievements/expedition/expedition.html',
                controller: 'AchievementsExpeditionController',
                controllerAs: 'vm'
            });
    }
})();
