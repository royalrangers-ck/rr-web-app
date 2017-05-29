(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsAdventureController', AchievementsAdventureController);

    AchievementsAdventureController.$inject = ['$log'];
    function AchievementsAdventureController ($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsAdventureController ...');
        }
    }
})();
