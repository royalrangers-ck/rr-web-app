(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTermsYearsController', ProfileTermsYearsController);

    function ProfileTermsYearsController ($log) {

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileTermsYearsController ...');
        }
    }
})();
