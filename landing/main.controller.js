(() => {

    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$log', '$http', 'growl', 'Endpoints'];
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
                if (response.data.success === true) {
                    growl.success(response.data.data.message);
                    $log.debug('Success subscribe', response);
                } else {
                    growl.error('Some thing wrong ...');
                    $log.debug('Some thing wrong with subscribe', response);
                }
            }, function errorCallback(response) {
                growl.error(Response.data.data.message);
                $log.debug('Error subscribe', response);
            });
        }
    }
})();
