(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log'];
    function HomeController($log) {
        const vm = this;

        activate();

        function activate() {
            $log.debug('Init HomeController ...');
        }
    }
})();