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
                countriesResponse: (RegistrationService) => {
                    return RegistrationService.countries().$promise;
                },
                ranksResponse: (RegistrationService) => {
                    return RegistrationService.ranks().$promise;
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