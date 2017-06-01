(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsAdventureController', AchievementsAdventureController);

    function AchievementsAdventureController ($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsAdventureController ...');
        }
    }
})();
