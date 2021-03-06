(() => {

    'use strict';

    angular
        .module('app')
        .config(NotificationSegment);

    function NotificationSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/notification/:message', 'notification').segment('notification', {
            template: '<h1>New Notification</h1>',
            controller: 'NotificationController',
            controllerAs: 'vm',
            dependencies: ['message']
        });
    }
})();
