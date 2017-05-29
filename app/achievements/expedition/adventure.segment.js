(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsExpeditionSegment);

    AchievementsExpeditionSegment.$inject = ['$routeSegmentProvider'];
    function AchievementsExpeditionSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements/expedition', 'achievements.expedition')
            .within('achievements')
            .segment('expedition', {
                'default': true,
                templateUrl: 'achievements/expedition/expedition.html',
                controller: 'AchievementsExpeditionController',
                controllerAs: 'vm'
            });
    }
})();
