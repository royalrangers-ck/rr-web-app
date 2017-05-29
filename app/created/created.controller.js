(() => {

    'use strict';

    angular
        .module('app')
        .controller('CreatedController', CreatedController);

    CreatedController.$inject = ['$log'];
    function CreatedController ($log) {
        const vm = this;

        activate();

        ////
        function activate () {
            $log.debug('Init CreatedController ...');
        }
    }
})();
