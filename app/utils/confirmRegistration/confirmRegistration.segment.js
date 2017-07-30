(() => {
    'use strict';

    angular
        .module('app')
        .config(ConfirmRegistrationSegment);

    function ConfirmRegistrationSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/app/confirmRegistration', 'app.confirmRegistration').within('app').segment('confirmRegistration', {
            templateUrl: 'utils/confirmRegistration/confirmRegistration.html',
            controller: 'ConfirmRegistrationController',
            controllerAs: 'vm',
            resolve: { /* It was finished before controller initialised */
                emailResponse: function ($route, ConfirmRegistrationService) { /* Now we can injected status in our controller */
                    return ConfirmRegistrationService.checkEmail($route.current.params.token); /* We send in service our token in function checkEmail */
                },

            }
        });
    }
})();



