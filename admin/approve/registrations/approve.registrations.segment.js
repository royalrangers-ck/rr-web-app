(() => {

    'use strict';

    angular
        .module('admin')
        .config(ApproveRegistrationsSegment);

    function ApproveRegistrationsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/approve/registrations', 'ApproveRegistrations').segment('ApproveRegistrations', {
            templateUrl: 'approve/registrations/approve.registrations.html',
            controller: 'ApproveRegistrationsController',
            controllerAs: 'vm',
            resolve: {
                users: function (UserFactory) {
                    return UserFactory.getApproveRegistrationUsers().$promise;
                }
            }
        });
    }
})();
