(() => {

    'use strict';

    angular
        .module('app')
        .config(ApproveUpdatesSegment);

    function ApproveUpdatesSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/approve/updates', 'ApproveUpdates').segment('ApproveUpdates', {
            templateUrl: 'approve/updates/approve.updates.html',
            controller: 'ApproveUpdatesController',
            controllerAs: 'vm',
            resolve: {
                users: function (UserFactory, UserService) {
                    let user = UserService.get();
                    return UserFactory.getApproveUpdateUsersByPlatoonId({platoonId: user.platoon.id}).$promise;
                }
            }
        });
    }
})();
