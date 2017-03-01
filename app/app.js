(() => {

    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'ngResource',
            'ngAnimate',
            'route-segment',
            'view-segment'
        ]).run(['$log', ($log) => {
        $log.debug('app is running...');
    }]);
})();
