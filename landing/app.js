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
            'ui.mask',
            'uiGmapgoogle-maps'
        ]).run(['$log', ($log) => {
        $log.debug('landing app is running...');
    }]);
})();
