(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsAdventureSegment);

    AchievementsAdventureSegment.$inject = ['$routeSegmentProvider'];
    function AchievementsAdventureSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements/adventure', 'achievements.adventure')
            .within('achievements')
            .segment('adventure', {
                'default': true,
                templateUrl: 'achievements/adventure/adventure.html',
                controller: 'AchievementsAdventureController',
                controllerAs: 'vm'
            });
    }
})();
