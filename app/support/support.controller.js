(() => {

    'use strict';

    angular
        .module('app')
        .controller('SupportController', SupportController);

    SupportController.$inject = ['$log'];
    function SupportController ($log) {
        const vm = this;

        activate();

        ////
        function activate () {
            $log.debug('Init SupportController ...');
        }
    }
})();
