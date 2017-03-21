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

            $http.post('/api/auth', req, (res) => {
                if (res.success) {
                    TokenService.save(res.data.token);
                    $window.location.pathname = '/app/';
                }
            })
        }
    }
})();
