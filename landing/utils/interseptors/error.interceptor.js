(function () {

    'use strict';

    angular
        .module('app')
        .factory('ErrorInterceptor', ErrorInterceptor);

    function ErrorInterceptor($q, growl, $location) {
        let checkError = function (response) {

            if (response && (response.status == 502 || response.status == 504)) {
                growl.error('Internal server error \n' + response.statusText, {
                    ttl: 7000,
                    onclose: function () {
                        $location.path('/');
                    },
                });

                return;
            }

            if (response && response.status !== 200) {
                growl.error(response.data.message)
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
