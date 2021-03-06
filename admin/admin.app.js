(() => {

    'use strict';

    angular
        .module('admin', [
            'ngRoute',
            'ngResource',
            'ngAnimate',
            'ngStorage',
            'route-segment',
            'view-segment',
            'angular-growl',
            'ui.bootstrap',
            'ngIdle'
        ])
        .run(($log) => {
            $log.debug('admin app is running...');
        });
})();
