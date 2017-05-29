(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsLeaderController', AchievementsLeaderController);

    function AchievementsLeaderController ($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsLeaderController ...');
        }
    }
})();
