(() => {

    'use strict';

    angular
        .module('app')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['$log'];
    function SignInController($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init SignInController...');
        }
    }
})();