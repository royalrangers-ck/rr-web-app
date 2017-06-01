(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsDiscoveryController', AchievementsDiscoveryController);

    function AchievementsDiscoveryController ($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsDiscoveryController ...');
        }
    }
})();
