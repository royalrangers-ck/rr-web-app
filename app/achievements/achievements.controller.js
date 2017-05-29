(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsController', AchievementsController);

    function AchievementsController ($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init AchievementsController ...');
        }
    }
})();
