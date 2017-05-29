(() => {

    'use strict';

    angular
        .module('app')
        .controller('PlatoonController', PlatoonController);

    PlatoonController.$inject = ['$log'];
    function PlatoonController ($log) {
        const vm = this;

        activate();

        ////

        function activate () {
            $log.debug('Init PlatoonController ...');
        }
    }
})();
