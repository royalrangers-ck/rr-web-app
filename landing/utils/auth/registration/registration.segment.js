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
                },
                ranks: (RegistrationService) => {
                    return RegistrationService.ranks();
                }
            }
        });

        $routeSegmentProvider.when('/registration/confirm', 'confirm').segment('confirm', {
            templateUrl: 'utils/auth/registration/confirm/confirm.html',
            controller: 'RegistrationConfirmController',
            controllerAs: 'vm',
            resolve: {
                confirmation: function (RegistrationService, $route) {
                    return RegistrationService.confirm({token: $route.current.params.token});
                }
            }
        });
    }
})();