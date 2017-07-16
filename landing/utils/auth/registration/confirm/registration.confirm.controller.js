(() => {

    'use strict';

    angular
        .module('app')
        .controller('RegistrationConfirmController', RegistrationConfirmController);

    function RegistrationConfirmController(confirmation, NotificationService, $location) {
        const vm = this;

        activate();

        ////

        function activate() {
            if (confirmation.$promise) {
                confirmation.$promise.then((res) => {
                    if (res.success) {
                        NotificationService.success(res.data.message);
                        $location.url('/login');
                    } else {
                        NotificationService.info(res.data.message);
                    }
                })
            }
        }
    }
})();
