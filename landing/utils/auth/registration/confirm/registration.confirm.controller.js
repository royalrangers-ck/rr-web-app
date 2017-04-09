(() => {

    'use strict';

    angular
        .module('app')
        .controller('RegistrationConfirmController', RegistrationConfirmController);

    RegistrationConfirmController.$inject = ['confirmation', 'growl', '$location'];
    function RegistrationConfirmController(confirmation, growl, $location) {
        const vm = this;

        activate();

        ////

        function activate() {
            if (confirmation.$promise) {
                confirmation.$promise.then((res) => {
                    if (res.success) {
                        growl.success(res.data.message);
                        $location.url('/login');
                    } else {
                        growl.info(res.data.message);
                    }
                })
            }
        }
    }
})();
