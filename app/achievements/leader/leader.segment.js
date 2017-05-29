(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsLeaderSegment);

    AchievementsLeaderSegment.$inject = ['$routeSegmentProvider'];
    function AchievementsLeaderSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements/leader', 'achievements.leader')
            .within('achievements')
            .segment('leader', {
                'default': true,
                templateUrl: 'achievements/leader/leader.html',
                controller: 'AchievementsLeaderController',
                controllerAs: 'vm'
            });
    }
})();
