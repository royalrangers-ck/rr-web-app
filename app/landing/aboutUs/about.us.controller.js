(() => {

    'use strict';

    angular
        .module('app')
        .controller('AboutUsController', AboutUsController);

    AboutUsController.$inject = ['$log'];
    function AboutUsController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init AboutUsController ...');
        }
    }
})();