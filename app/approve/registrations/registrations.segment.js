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
                usersList: function (ApproveRegistrationsService, $rootScope) {
                    return ApproveRegistrationsService.getUsers({platoonId: $rootScope.currentUser.platoon.id});
                },
                platoons: function (ApproveRegistrationsService){
                    return ApproveRegistrationsService.allPlatoons();
                }
            }
        });
    }
})();