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
        /**
         * @description When user go to login page and have token we must check token.
         * If token not dead we redirect user to app without input email and pass.
         * If token dead we clean local token and user must login with email and pass.
         */
        function activate() {

            let authorizationToken = TokenService.get();
            if (authorizationToken) {
                let req = {
                    method: 'GET',
                    url: '/api/refresh',
                    headers: {
                        'Authorization': authorizationToken
                    }
                };

                $http(req).then(function successCallback(response) {
                    console.log('YEAH we have good response', response);
                    $window.location.pathname = '/app/'
                }, function errorCallback(response) {
                    console.log('No! We have bad response', response);
                    TokenService.clean();
                    $window.location.pathname = '/'
                });
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
