(() => {

    'use strict';

    angular
        .module('app')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$log'];
    function RegistrationController($log) {
        const vm = this;
        vm.availableOptions = [];
        for(let i = 1; i < 1000; i++) {
            vm.availableOptions.push(i)
        }

        activate();

        ///

        function activate() {
            $log.debug('Init RegistrationController ...');
        }
    }
})();