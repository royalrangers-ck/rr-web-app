(function() {
    angular
        .module('app')
        .factory('AuthInterceptor', AuthInterceptor);

    AuthInterceptor.$inject = ['$q', '$injector'];
    function AuthInterceptor($q, $injector) {
        var checkAuth = function(response) {
            if (response && response.status === 401) {
                // do what we want
            }
        };

        function redirectToHomePage() {
            window.location.pathname = '/';
        }

        return {
            request: function(config) {
                return config;
            },

            requestError: function(rejection) {
                return $q.reject(rejection);
            },

            /* Set Authentication.isAuthenticated to true if 200 received */
            response: function (response) {
                checkAuth(response);

                return response || $q.when(response);
            },

            /* Revoke client authentication if 401 is received */
            responseError: function(rejection) {
                checkAuth(rejection);

                return $q.reject(rejection);
            }
        };
    }
})();