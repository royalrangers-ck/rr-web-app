(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsSegment);

    function AchievementsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements', 'achievements')
            .segment('achievements', {
                templateUrl: 'achievements/achievements.html',
                controller: 'AchievementsController'
            });
    }
})();