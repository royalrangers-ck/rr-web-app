(() => {

    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$log', '$window', '$route', '$http', 'TokenService'];
    function LoginController($log, $window, $route, $http, TokenService) {
        const vm = this;

        vm.data = {};
        vm.login = login;

        activate();

        ///

        function activate() {
            $log.debug('Init LoginController ...');
        }

        function login() {
            let req = {
                email: vm.data.email,
                password: vm.data.password
            };

            $http.post('/api/auth', req, {
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
