(() => {

    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$log', '$window','$http', 'TokenService' , 'Endpoints'];
    function LoginController($log, $window, $http, TokenService, Endpoints) {
        const vm = this;

        vm.data = {};
        vm.login = login;

        ////

        function login() {
            let req = {
                email: vm.data.email,
                password: vm.data.password
            };

            $http.post(Endpoints.AUTH, req, {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                })
                .then((res) => {
                    if (res.status == 200) {
                        TokenService.save(res.data.data.token);
                        $window.location.pathname = '/app/';
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
})();
