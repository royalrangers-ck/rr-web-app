(() => {

    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'ngResource'
        ])
        .run(['$log', ($log) => {
            $log.debug('app is running...');
        }]);
})();
