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



    activate();


    function activate() {
        console.log('Init angular App ');
    }
})();


(() => {

    angular
        .module('app')
        .config(AppLocProvider);

    AppLocProvider.$inject = ['$locationProvider'];

    function AppLocProvider($locationProvider) {
        $locationProvider.hashPrefix('');
    }

})();
