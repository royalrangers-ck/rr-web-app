(() => {

    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController($log, $http, growl, Endpoints) {
        const vm = this;

        vm.submit = submit;

        ////

        /**
         * description Function for subscribe users on landing page
         */
        function submit() {
            let req = {
                method: 'POST',
                url: Endpoints.SUBSCRIBE,
                data: {
                    "mail": vm.email
                }
            };

            $http(req).then(function successCallback(response) {
                growl.success(response.data.data.message);
                $log.debug('Success subscribe', response);
            }, function errorCallback(response) {
                growl.error(response.data.data.message);
                $log.debug('Error subscribe', response);
            });
        }
    }
})();
