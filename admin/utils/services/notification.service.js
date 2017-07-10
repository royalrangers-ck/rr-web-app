(() => {

    'use strict';

    angular
        .module('admin')
        .service('NotificationService', NotificationService);

    function NotificationService(growl) {

        this.success = success;
        this.info = info;
        this.error = error;

        ////

        function success(message, parameters) {
            growl.error(message, parameters);
        }

        function info(message, parameters) {
            growl.error(message, parameters);
        }

        function error(message, parameters) {
            growl.error(message, parameters);
        }
    }
})();
