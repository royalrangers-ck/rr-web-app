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
    }
})();
