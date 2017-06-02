(() => {

    'use strict';

    angular
        .module('app')
        .controller('ForgotPasswordController', ForgotPasswordController);

    function ForgotPasswordController ($http, Endpoints, growl) {
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
                    growl.success(res.data.data.message);
                } else {
                    growl.error(res.data.data.message);
                }
            });
        }
    }
})();
