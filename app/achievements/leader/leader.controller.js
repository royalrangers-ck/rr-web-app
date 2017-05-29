(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsLeaderController', AchievementsLeaderController);

    AchievementsLeaderController.$inject = ['$log'];
    function AchievementsLeaderController ($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsLeaderController ...');
        }
    }
})();
