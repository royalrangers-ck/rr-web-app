(() => {

    'use strict';

    angular
        .module('app')
        .controller('PlatoonController', PlatoonController);

    function PlatoonController ($log) {
        const vm = this;

        activate();

        ////

        function activate () {
            $log.debug('Init PlatoonController ...');
        }
    }
})();
