(() => {

    'use strict';

    angular
        .module('app')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['$log'];
    function AdminController ($log) {
        const vm = this;

        activate();

        ////
        function activate () {
            $log.debug('Init AdminController ...');
        }
    }
})();
