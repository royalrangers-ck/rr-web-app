(() => {

    'use strict';

    angular
        .module('app')
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = ['$log'];
    function SettingsController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init SettingsController ...');
        }
    }
})();