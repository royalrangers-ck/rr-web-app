(() => {

    'use strict';

    angular
        .module('app')
        .controller('ChangePasswordController', ChangePasswordController);

    function ChangePasswordController (tokenResponse, $http, Endpoints, NotificationService, $location, TokenService) {
        const vm = this;

        vm.submit = submit;

        ////

        function submit () {

            let req = {
                method: 'POST',
                url: Endpoints.CHANGE_PASSWORD,
                params: { token: tokenResponse },
                data: vm.data.password
            };

            $http(req).then((res) => {
                if (res.data.success) {
                    NotificationService.success(res.data.data.message);
                    TokenService.clean();
                    $location.url('/login');
                } else {
                    NotificationService.error(res.data.data.message);
                }
            });
        }
    }
})();
