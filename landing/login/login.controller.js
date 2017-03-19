(() => {

    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$log', '$route', 'LoginService'];
    function LoginController($log, $route, $window, LoginService) {
        const vm = this;

        vm.data = {};
        vm.login = login;

        activate();

        ///

        function activate() {
            $log.debug('Init LoginController ...');
        }

        function login() {
            LoginService.Login = function (res) {
                if (res.token) {
                    $window.localStorage.setItem('token', res.token);
                    $route.path('/app');
                }
            }
        }
    }
})();