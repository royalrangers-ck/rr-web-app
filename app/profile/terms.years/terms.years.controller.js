(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTermsYearsController', ProfileTermsYearsController);

    ProfileTermsYearsController.$inject = ['$log'];
    function ProfileTermsYearsController ($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileTermsYearsController ...');
        }
    }
})();
