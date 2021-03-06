(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsKidsSegment);

    function AchievementsKidsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements/kids', 'achievements.kids')
            .within('achievements')
            .segment('kids', {
                'default': true,
                templateUrl: 'achievements/kids/kids.html',
                controller: 'AchievementsKidsController',
                controllerAs: 'vm'
            });
    }
})();
