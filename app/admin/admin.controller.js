(() => {

    'use strict';

    angular
        .module('app')
        .controller('AdminController', AdminController);

    function AdminController ($log) {
        const vm = this;

        activate();

        ////
        function activate () {
            $log.debug('Init AdminController ...');
        }
    }
})();
