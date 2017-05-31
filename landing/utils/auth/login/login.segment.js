(() => {

    'use strict';

    angular
        .module('app')
        .config(LoginSegment);

    function LoginSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/login', 'login').segment('login', {
            templateUrl: 'utils/auth/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        });
        
    }
})();
