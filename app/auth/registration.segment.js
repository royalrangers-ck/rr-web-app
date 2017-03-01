(() => {

    'use strict';

    angular
        .module('app')
        .config(RegistrationSegment);

    RegistrationSegment.$inject = ['$routeSegmentProvider', '$routeProvider'];
    function RegistrationSegment($routeSegmentProvider, $routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider.when('/register', 'Registration').segment('Registration', {
            templateUrl: 'auth/registration.html'
        });
    }
})();