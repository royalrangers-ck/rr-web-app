(() => {

    'use strict';

    angular
        .module('app')
        .config(AchievementsAdventureSegment);

    function AchievementsAdventureSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/achievements/adventure', 'achievements.adventure')
            .within('achievements')
            .segment('adventure', {
                templateUrl: 'achievements/adventure/adventure.html',
                controller: 'AchievementsAdventureController',
                controllerAs: 'vm'
            });
    }
})();
