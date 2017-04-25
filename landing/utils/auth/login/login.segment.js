(() => {

    'use strict';

    angular
        .module('app')
        .config(LoginSegment);

    LoginSegment.$inject = ['$routeSegmentProvider'];
    function LoginSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/login', 'login').segment('login', {
            templateUrl: 'utils/auth/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        });

        $routeSegmentProvider.when('/login/:message', 'login.message').segment('login.message', {
            templateUrl: 'utils/auth/login/login.html',
            controller: 'LoginControllerSpec',
            controllerAs: 'vm',
            //dependencies: ['message']
        });
    }
})();
