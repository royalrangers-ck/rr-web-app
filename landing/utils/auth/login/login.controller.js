(() => {

    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    function LoginController($scope, NotificationService, $window, $http, $controller, UserService, TokenService, Endpoints, $log) {
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
                form.unSubmit();
                return;
            }

            let data = {
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
                        redirectUserToThePageAccordingToHisRole();
                    } else {
                        NotificationService.info(res.data.data.message);
                    }
                }
            };

            $http.post(Endpoints.AUTH, data, config).then(response);
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

                let req = {
                    method: 'GET',
                    url: '/api/refresh',
                    headers: {
                        'Authorization': authorizationToken
                    }
                };

                $http(req)
                    .then((res) => {
                        redirectUserToThePageAccordingToHisRole();
                    }, (err) => {
                        TokenService.clean();
                    });
            }
        }

        /**
         * Redirect user to the page according to his or her role
         *
         * @description For now user can be redirected to:
         *
         * - /admin/#/ (route for admin application)
         * - /app/#/ (route for users application)
         */
        function redirectUserToThePageAccordingToHisRole() {
            UserService.requestUser((res) => {
                if (!res.data.success) {
                    return NotificationService.info(res.data.data.data.message);
                }

                UserService.save(res.data.data);

                let isSuperAdmin = UserService.isSuperAdmin;
                if (isSuperAdmin()) {
                    $window.location.hash = '#/';
                    $window.location.pathname = '/admin/';
                } else {
                    $window.location.hash = '#/';
                    $window.location.pathname = '/app/';
                }
            });
        }
    }
})();
