(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmationController', ConfirmationController);

    ConfirmationController.$inject = ['$log'];
    function ConfirmationController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init ConfirmationController ...');
        }
    }
})();