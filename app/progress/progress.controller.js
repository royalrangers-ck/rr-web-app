(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProgressController', ProgressController);

    function ProgressController ($log) {
        const vm = this;

        activate();

        ////
        function activate () {
            $log.debug('Init ProgressController ...');
        }
    }
})();
