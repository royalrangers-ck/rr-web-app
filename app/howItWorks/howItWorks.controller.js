(() => {

    'use strict';

    angular
        .module('app')
        .controller('HowItWorksController', HowItWorksController);

    HowItWorksController.$inject = ['$log'];
    function HowItWorksController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init HowItWorksController ...');
        }
    }
})();