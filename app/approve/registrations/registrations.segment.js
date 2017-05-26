(() => {

    'use strict';

    angular
        .module('app')
        .config(ApproveRegistrationsSegment);

    function ApproveRegistrationsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/approve/registrations', 'ApproveRegistrations').segment('ApproveRegistrations', {
            templateUrl: 'approve/registrations/registrations.html',
            controller: 'ApproveRegistrationsController',
            controllerAs: 'vm',
            resolve: {
                usersList: function (ApproveRegistrationsService, UserService) {
                    let user = UserService.get();
                    return ApproveRegistrationsService.getUsers({platoonId: user.platoon.id});
                }
            }
        });
    }
})();