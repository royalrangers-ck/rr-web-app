/**
 * Auth Interceptor
 * @namespace Factories
 */
(function () {

    'use strict';

    angular
        .module('admin')
        .factory('AuthInterceptor', AuthInterceptor);

    function AuthInterceptor($q, TokenService) {
        return {
            request: function (config) {
                addToken(config);

                return config;
            },

            requestError: function (rejection) {
                return $q.reject(rejection);
            },

            /* Set Authentication.isAuthenticated to true if 200 received */
            response: function (response) {
                checkAuth(response);
                checkEmail(response);

                return response || $q.when(response);
            },

            /* Revoke client authentication if 401 is received */
            responseError: function (rejection) {
                checkAuth(rejection);
                checkEmail(rejection);

                return $q.reject(rejection);
            }
        };

        function addToken(config) {
            config.headers["Authorization"] = TokenService.get();
        }

        function checkAuth(response) {
            if (response && response.status === 401) {
                redirectToHomePage();
            }
        }

        function redirectToHomePage() {
            window.location.pathname = '/';
        }

        function checkEmail(responce) {
            if (responce && responce.status === 409) {
                alert('User with this email already exists!')
            }
        }
    }
})();
