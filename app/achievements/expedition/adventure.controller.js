(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsExpeditionController', AchievementsExpeditionController);

    function AchievementsExpeditionController ($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsExpeditionController ...');
        }
    }
})();
