(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmationFormController', ConfirmationFormController);

    ConfirmationFormController.$inject = ['$log'];
    function ConfirmationFormController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init ConfirmationFormController ...');
        }
    }
})();