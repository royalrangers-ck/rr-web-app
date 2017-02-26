(() => {

    'use strict';

    angular
        .module('app')
        .controller('ContactFormController', ContactFormController);

    ContactFormController.$inject = ['$log'];
    function ContactFormController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init ContactFormController ...');
        }
    }
})();