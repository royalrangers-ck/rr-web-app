(() => {

    'use strict';

    angular
        .module('app')
        .config(ApproveRegistrationsSegment);

    ApproveRegistrationsSegment.$inject = ['$routeSegmentProvider'];
    function ApproveRegistrationsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/approve/registrations', 'ApproveRegistrations').segment('ApproveRegistrations', {
            templateUrl: 'approve/registrations/approve.registrations.html',
            controller: 'ApproveRegistrationsController',
            controllerAs: 'vm',
            resolve: {
                users: function (UserFactory, UserService) {
                    let user = UserService.get();
                    return UserFactory.getApproveRegistrationUsersByPlatoonId({platoonId: user.platoon.id}).$promise;
                }
            }
        });
    }
})();