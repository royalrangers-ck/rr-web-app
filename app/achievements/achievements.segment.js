(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsSegment);

    AchievementsSegment.$inject = ['$routeSegmentProvider'];
    function AchievementsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements', 'achievements')
            .segment('achievements', {
                'default': true,
                templateUrl: 'achievements/achievements.html',
                controller: 'AchievementsController'
            });
    }
})();