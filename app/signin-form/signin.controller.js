(() => {

    'use strict';

    angular
        .module('app')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['$log'];
    function SignInController($log) {

        $scope.email = "Email";
        $scope.password = "Password";

        activate();

        ///

        function activate() {
            $log.debug('Init SignInController...');
        }
    }
})();