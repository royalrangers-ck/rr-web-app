(() => {

    'use strict';

    angular
        .module('app')
        .controller('SupportController', SupportController);

    function SupportController ($log) {
        const vm = this;

        activate();

        ////
        function activate () {
            $log.debug('Init SupportController ...');
        }
    }
})();
