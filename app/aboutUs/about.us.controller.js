(() => {

    'use strict';

    angular
        .module('app')
        .controller('AboutUsController', AboutUsController);

    AboutUsController.$inject = ['$log'];
    function AboutUsController($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init AboutUsController ...');
        }
    }
})();