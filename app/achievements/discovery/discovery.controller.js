(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsDiscoveryController', AchievementsDiscoveryController);

    AchievementsDiscoveryController.$inject = ['$log'];
    function AchievementsDiscoveryController ($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsDiscoveryController ...');
        }
    }
})();
