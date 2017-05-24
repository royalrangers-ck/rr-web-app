(() => {

    'use strict';

    angular
        .module('app')
        .config(ApproveUpdatesSegment);

    ApproveUpdatesSegment.$inject = ['$routeSegmentProvider'];
    function ApproveUpdatesSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/approve/updates', 'ApproveUpdates').segment('ApproveUpdates', {
            templateUrl: 'approve/updates/updates.html',
            controller: 'ApproveUpdatesController',
            controllerAs: 'vm',
            resolve: {
                users: function (User, UserService) {
                    let user = UserService.get();
                    return User.getApproveUpdateUsersByPlatoonId({platoonId: user.platoon.id}).$promise;
                }
            }
        });
    }
})();