(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$log'];
    function ProfileController ($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileController ...');
        }
    }

})();