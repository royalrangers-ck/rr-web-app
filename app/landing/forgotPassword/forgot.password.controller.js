(() => {

    'use strict';

    angular
        .module('app')
        .controller('ForgotPasswordController', ForgotPasswordController);

    ForgotPasswordController.$inject = ['$log'];
    function ForgotPasswordController($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init ForgotPasswordController...');
        }
    }
})();