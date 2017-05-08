(() => {

    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['growl', '$window', '$http', '$routeSegment', 'TokenService', 'Endpoints'];
    function LoginController(growl, $window, $http, $routeSegment, TokenService, Endpoints) {
        const vm = this;

        vm.data = {};
        vm.login = login;

        activate();

        ////

        function activate() {
            let authorizationToken = TokenService.get();
            if (authorizationToken) {
                TokenService.save(authorizationToken);
                $window.location.pathname = '/app/';
            }
        }

        function login() {
            let req = {
                email: vm.data.email,
                password: vm.data.password
            };

            let config = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };

            let response = (res) => {
                if (res.status == 200) {
                    if (res.data.success) {
                        TokenService.save(res.data.data.token);
                        window.localStorage.setItem('token', res.data.data.token);
                        $window.location.pathname = '/app/';
                    } else {
                        growl.info(res.data.data.message);
                    }
                }

                vm.form.$setUntouched();
                vm.form.$setPristine();
                vm.form.$setDirty();
            };

            $http.post(Endpoints.AUTH, req, config).then(response);
        }
    }
})();
