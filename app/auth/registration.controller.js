(() => {

    'use strict';

    angular
        .module('app')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$log'];
    function RegistrationController($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init RegistrationController ...');
        }
    }
})();