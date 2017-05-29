(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsKidsController', AchievementsKidsController);

    AchievementsKidsController.$inject = ['$log'];
    function AchievementsKidsController ($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsKidsController ...');
        }
    }
})();
