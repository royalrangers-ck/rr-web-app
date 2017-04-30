(() => {

    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['growl', '$window', '$http', '$routeSegment', 'TokenService', 'Endpoints', '$localStorage'];
    function LoginController(growl, $window, $http, $routeSegment, TokenService, Endpoints, $localStorage) {
        const vm = this;

        vm.data = {};
        vm.login = login;

        ////
        // If we have token, we don`t need input mail and password
        if ($localStorage.token) {
            console.log($localStorage.token);
            $window.location.pathname = '/app/';
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
                        $window.location.pathname = '/app/';
                    } else {
                        growl.info(res.data.data.message);
                        $routeSegment.chain[0].reload();
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
