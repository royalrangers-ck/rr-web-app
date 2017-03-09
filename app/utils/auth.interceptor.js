(function () {

    'use strict';

    angular
        .module('app')
        .factory('AuthInterceptor', AuthInterceptor);

    AuthInterceptor.$inject = ['$q', '$injector'];
    function AuthInterceptor($q, $injector) {
        return {
            request: function (config) {
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


// EXAMPLES ( Maybe it will be useful )

// Make asynchronous operations in request interceptor
//
// module.factory('myInterceptor', ['$q', 'someAsyncService', function($q, someAsyncService) {
//     var requestInterceptor = {
//         request: function(config) {
//             var deferred = $q.defer();
//             someAsyncService.doAsyncOperation().then(function() {
//                 // Asynchronous operation succeeded, modify config accordingly
//                 ...
//                 deferred.resolve(config);
//             }, function() {
//                 // Asynchronous operation failed, modify config accordingly
//                 ...
//                 deferred.resolve(config);
//             });
//             return deferred.promise;
//         }
//     };
//
//     return requestInterceptor;
// }]);

// Session Injector
//
// module.factory('sessionInjector', ['SessionService', function(SessionService) {
//     var sessionInjector = {
//         request: function(config) {
//             if (!SessionService.isAnonymus) {
//                 config.headers['x-session-token'] = SessionService.token;
//             }
//             return config;
//         }
//     };
//     return sessionInjector;
// }]);
// module.config(['$httpProvider', function($httpProvider) {
//     $httpProvider.interceptors.push('sessionInjector');
// }]);