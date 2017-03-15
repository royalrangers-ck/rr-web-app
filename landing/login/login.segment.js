(() => {

    'use strict';

    angular
        .module('app')
        .config(LoginSegment);

    LoginSegment.$inject = ['$routeSegmentProvider'];
    function LoginSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/login', 'login').segment('login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        });
    }
})();