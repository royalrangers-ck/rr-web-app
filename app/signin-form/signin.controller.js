(() => {

    'use strict';

    angular
        .module('app')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['$log'];
    function SignInController($log) {

        const vm = this;

        vm.email = "Email";
        vm.password = "Password";

        activate();

        ///

        function activate() {
            $log.debug('Init SignInController...');
        }
    }
})();