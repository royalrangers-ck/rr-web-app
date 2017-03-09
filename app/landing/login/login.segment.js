(() => {

    'use strict';

    angular
        .module('app')
        .config(LoginSegment);

    LoginSegment.$inject = ['$routeSegmentProvider'];
    function LoginSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/login', 'landing.login').within('landing').segment('login', {
            templateUrl: 'landing/login/login.html',
            controller: 'LoginController'
        });
    }
})();