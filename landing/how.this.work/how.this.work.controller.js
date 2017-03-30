(() => {

    'use strict';

    angular
        .module('app')
        .controller('HowThisWorkController', HowThisWorkController);

    HowThisWorkController.$inject = ['$log'];
    function HowThisWorkController($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init HowThisWorkController ...');
        }
    }
})();