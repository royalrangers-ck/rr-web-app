(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsExpeditionController', AchievementsExpeditionController);

    AchievementsExpeditionController.$inject = ['$log'];
    function AchievementsExpeditionController ($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsExpeditionController ...');
        }
    }
})();
