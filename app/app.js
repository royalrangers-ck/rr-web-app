;(function () {

    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'ngResource'
        ])
        .run('$log', [function ($log) {
            $log.debug('app is running...');
        }]);
})();
