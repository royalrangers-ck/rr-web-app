(function () {

    'use strict';

    angular
        .module('app')
        .factory('ErrorInterceptor', ErrorInterceptor);

    ErrorInterceptor.$inject = ['$q', '$injector', 'growl'];
    function ErrorInterceptor($q, $injector, growl) {
        let checkError = function (response) {
            if (response && response.status !== 200) {
                growl.error(response.data.message, response.data.error)
            }
        };

        return {
            request: function (config) {
                return config;
            },

            requestError: function (rejection) {
                return $q.reject(rejection);
            },

            /* Show growl notification if status 500 received */
            response: function (response) {
                checkError(response);

                return response || $q.when(response);
            },

            /* Show growl notification if status 500 received */
            responseError: function (rejection) {
                checkError(rejection);

                return $q.reject(rejection);
            }
        };
    }
})();
