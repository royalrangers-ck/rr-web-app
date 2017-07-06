(() => {

    'use strict';

    angular
        .module('app')
        .controller('ChangePasswordController', ChangePasswordController);

    function ChangePasswordController (tokenResponse, $http, Endpoints, growl, $location, TokenService) {
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
                    growl.success(res.data.data.message);
                    TokenService.clean();
                    $location.url('/login');
                } else {
                    growl.error(res.data.data.message);
                }
            });
        }
    }
})();
