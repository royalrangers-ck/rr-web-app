(() => {

    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController($http, NotificationService, Endpoints) {
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
                    mail: vm.email
                }
            };

            $http(req).then((res) => {
                if (res.data.success) {
                    NotificationService.success(res.data.data.message);
                } else {
                    NotificationService.error(res.data.data.message);
                }
            });
        }
    }
})();
