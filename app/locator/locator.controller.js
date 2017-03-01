(() => {

    'use strict';

    angular
        .module('app')
        .controller('LocatorController', LocatorController);

    LocatorController.$inject = ['$log'];
    function LocatorController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init LocatorController ...');
        }
    }
})();