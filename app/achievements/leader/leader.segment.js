(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsLeaderSegment);

    function AchievementsLeaderSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements/leader', 'achievements.leader')
            .within('achievements')
            .segment('leader', {
                templateUrl: 'achievements/leader/leader.html',
                controller: 'AchievementsLeaderController',
                controllerAs: 'vm'
            });
    }
})();
