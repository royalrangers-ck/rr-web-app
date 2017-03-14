(() => {

    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$log'];
    function LoginController($log) {
        const vm = this;

        vm.email = "Email";
        vm.password = "Password";

        activate();

        ///

        function activate() {
            $log.debug('Init LoginController ...');
        }
    }
})();