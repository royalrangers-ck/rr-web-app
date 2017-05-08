(() => {

    'use strict';

    angular
        .module('app')
        .controller('NotificationController', NotificationController);

    NotificationController.$inject = ['growl', '$location', '$timeout', '$routeSegment'];
    function NotificationController(growl, $location, $timeout, $routeSegment) {
        const vm = this;

        activate();

        ////

        function activate() {
            let message = $routeSegment.$routeParams.message;
            if (message) {
                growl.error(message);
            }

            $timeout(() => {
                $location.url('/');
            });
        }
    }
})();
