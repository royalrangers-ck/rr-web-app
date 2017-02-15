;(() => {

    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'ngResource'
        ])
        .run(['$log', ($log) => {
            $log.debug('auth app is running...');
        }]);
})();
