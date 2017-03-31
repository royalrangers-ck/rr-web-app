(() => {

    'use strict';

    angular
        .module('app')
        .config(RegistrationSegment);

    RegistrationSegment.$inject = ['$routeSegmentProvider'];
    function RegistrationSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/registration', 'registration').segment('registration', {
            templateUrl: 'utils/auth/registration/registration.html',
            controller: 'RegistrationController',
            controllerAs: 'vm',
            resolve: {
                countries: (RegistrationService) => {
                    return RegistrationService.countries()
                }
            }
        })
    }
})();