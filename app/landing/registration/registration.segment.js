(() => {

    'use strict';

    angular
        .module('app')
        .config(RegistrationSegment);

    RegistrationSegment.$inject = ['$routeSegmentProvider'];
    function RegistrationSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/registration', 'landing.registration').within('landing').segment('registration', {
            templateUrl: 'landing/registration/registration.html',
            controller: 'RegistrationController',
            controllerAs: 'vm'
        });
    }
})();