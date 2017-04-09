(() => {

    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$window', '$http', 'TokenService', 'Endpoints'];
    function LoginController($window, $http, TokenService, Endpoints) {
        const vm = this;

        vm.data = {};
        vm.login = login;

        ////

        function login() {
            let req = {
                email: vm.data.email,
                password: vm.data.password
            };

            let config = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };

            $http.post(Endpoints.AUTH, req, config).then((res) => {
                if (res.status == 200) {
                    if (res.data.success) {
                        TokenService.save(res.data.data.token);
                        $window.location.pathname = '/app/';
                    } else {
                        growl.info(res.data.data.message);
                    }
                }

                vm.form.$setUntouched();
                vm.form.$setPristine();
                vm.form.$setDirty();
            })
        }
    }
})();
