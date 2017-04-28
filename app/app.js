(() => {

    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'ngResource',
            'ngAnimate',
            'ngStorage',
            'route-segment',
            'view-segment',
            'angular-growl',
            'ui.bootstrap',
            'ngIdle',
            'ngImgCrop'
        ]).run(['$log', ($log) => {
        $log.debug('app is running...');
    }]);
})();
