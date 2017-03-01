(() => {

    'use strict';

    angular
        .module('app')
        .controller('AboutProjectController', AboutProjectController);

    AboutProjectController.$inject = ['$log'];
    function AboutProjectController($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init AboutUsController ...');
        }
    }
})();
