(() => {

    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    function LoginController($scope, growl, $window, $http, $controller, TokenService, Endpoints, $log) {
        const vm = angular.extend(this, $controller('BaseController', {$scope: $scope}));

        vm.data = {};
        vm.login = login;

        activate();

        ////

        function activate() {
            $log.debug('Start login controller...');

            checkToken();
        }

        function login() {
            let form = vm.getForm(vm.form);
            if (form.isNotExist() || form.$invalid) {
                form.unSubmit(); return;
            }

            let req = {
                email: vm.data.email,
                password: vm.data.password
            };

            let config = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };

            let response = (res) => {
                if (res.status === 200) {
                    if (res.data.success) {
                        TokenService.save(res.data.data.token);
                        window.localStorage.setItem('token', res.data.data.token);
                        $window.location.pathname = '/app/';
                    } else {
                        growl.info(res.data.data.message);
                    }
                }
            };

            $http.post(Endpoints.AUTH, req, config).then(response);
            form.reload();
        }

        /**
         * @description When user go to login page and have token we must check token.
         * If token not dead we redirect user to app without input email and pass.
         * If token dead we clean local token and user must login with email and pass.
         */
        function checkToken() {
            let authorizationToken = TokenService.get();

            if (authorizationToken) {
                let localToken = localStorage.token;

                $log.debug('Angular $localStorage token: ', authorizationToken);
                $log.debug('Native localStorage token: ', localToken);

                if (authorizationToken !== localToken) {
                    $log.debug('Angular $localStorage token != Native localStorage token');
                    $log.debug('Angular $localStorage token will cleaned');

                    localStorage.token = null;
                    TokenService.clean();
                    return
                }

                let req = {
                    method: 'GET',
                    url: '/api/refresh',
                    headers: {
                        'Authorization': authorizationToken
                    }
                };

                $http(req).then(function successCallback(response) {
                    $log.debug('YEAH! It`s good token', response);
                    $window.location.pathname = '/app/'
                }, function errorCallback(response) {
                    $log.debug('No! It`s bad token', response);
                    TokenService.clean();
                });
            }
        }
    }
})();
