(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProgressController', ProgressController);

    ProgressController.$inject = ['$log'];
    function ProgressController ($log) {
        const vm = this;

        activate();

        ////
        function activate () {
            $log.debug('Init ProgressController ...');
        }
    }
})();
