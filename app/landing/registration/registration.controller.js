(() => {

    'use strict';

    angular
        .module('app')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$log'];
    function RegistrationController($log) {
        const vm = this;

        vm.availableOptions = [];

        activate();

        ///

        function activate() {
            $log.debug('Init RegistrationController ...');
        }
    }
})();