(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmUsersController', ConfirmUsersController);

    ConfirmUsersController.$inject = ['$log'];
    function ConfirmUsersController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init ConfirmUsersController ...');
        }
    }
})();