(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsController', AchievementsController);

    AchievementsController.$inject = ['$log'];
    function AchievementsController ($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsController ...');
        }
    }
})();
