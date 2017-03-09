(() => {

    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$log'];
    function AppController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init AppController ...');
        }
    }
})();