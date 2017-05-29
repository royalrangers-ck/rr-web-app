(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsKidsController', AchievementsKidsController);

    function AchievementsKidsController ($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsKidsController ...');
        }
    }
})();
