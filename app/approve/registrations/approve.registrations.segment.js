(() => {

    'use strict';

    angular
        .module('app')
        .config(ApproveRegistrationsSegment);

    ApproveRegistrationsSegment.$inject = ['$routeSegmentProvider'];
    function ApproveRegistrationsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/approve/registrations', 'ApproveRegistrations').segment('ApproveRegistrations', {
            templateUrl: 'approve/registrations/registrations.html',
            controller: 'ApproveRegistrationsController',
            controllerAs: 'vm',
            resolve: {
                usersList: function (User, UserService) {
                    let user = UserService.get();
                    return User.getApproveRegistrationUsersByPlatoonId({platoonId: user.platoon.id});
                }
            }
        });
    }
})();