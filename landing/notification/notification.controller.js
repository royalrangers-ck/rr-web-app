(() => {

    'use strict';

    angular
        .module('app')
        .controller('NotificationController', NotificationController);

    function NotificationController(NotificationService, $location, $timeout, $routeSegment) {
        const vm = this;

        activate();

        ////

        function activate() {
            let message = $routeSegment.$routeParams.message;
            if (message) {
                NotificationService.error(message);
            }

            $timeout(() => {
                $location.url('/');
            });
        }
    }
})();
