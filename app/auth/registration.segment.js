(() => {

    'use strict';

    angular
        .module('app')
        .config(RegistrationSegment);

    RegistrationSegment.$inject = ['$routeSegmentProvider'];
    function RegistrationSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/register', 'register').segment('register', {
            templateUrl: 'auth/registration.html'
        });
    }
})();