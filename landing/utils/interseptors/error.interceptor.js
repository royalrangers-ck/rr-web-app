(function () {

    'use strict';

    angular
        .module('app')
        .factory('ErrorInterceptor', ErrorInterceptor);

    ErrorInterceptor.$inject = ['$q', 'growl', '$location'];
    function ErrorInterceptor($q, growl, $location) {
        let checkError = function (response) {

            if (response && response.status == 502 || response && response.status == 504) {
                growl.error('Вибачте, нажаль сервер зараз не доступний \n' + response.statusText, {
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
