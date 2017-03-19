(() => {

    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$log', '$route', 'LoginService', 'TokenService'];
    function LoginController($log, $window, LoginService, TokenService) {
        const vm = this;

        vm.data = {};
        vm.login = login;

        activate();

        ///

        function activate() {
            $log.debug('Init LoginController ...');
        }

        function login() {
            let afterSend = function (res) {
                if (res.success) {
                    TokenService.save(res.data.token);
                    $window.location.pathname = '/app/';
                }
            };

            let req = {
                email: vm.data.email,
                password: vm.data.password
            };

            LoginService.login(req, afterSend);
        }
    }
})();
