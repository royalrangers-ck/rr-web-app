(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmRegistrationController', ConfirmRegistrationController);

    ConfirmRegistrationController.$inject = ['$log', 'status']; /* Injected status resolve from routing*/

    function ConfirmRegistrationController($log, status) {
        const vm = this;

        activate();
        show();

        function activate() {
            $log.debug('Init ConfirmRegistrationController ...');
        }

        function show() {
            $log.debug(status); /* We print our status in console for testing */
        }

    }
})();





