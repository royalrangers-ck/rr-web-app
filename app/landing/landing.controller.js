(() => {

    'use strict';

    angular
        .module('app')
        .controller('LandingController', LandingController);

    LandingController.$inject = ['$log'];
    function LandingController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init LandingController ...');
        }
    }
})();