(() => {

    'use strict';

    angular
        .module('app')
        .controller('ForgotPasswordController', ForgotPasswordController);

    function ForgotPasswordController ($http, Endpoints, NotificationService) {
        const vm = this;

        vm.submit = submit;

        ////

        function submit () {
            let req = {
                method: 'POST',
                url: Endpoints.FORGOT_PASSWORD,
                params: {
                    email: vm.email
                }
            };

            $http(req).then((res) => {
                if (res.data.success) {
                    NotificationService.success(res.data.data.message);
                } else {
                    NotificationService.error(res.data.data.message);
                }
            });
        }
    }
})();
