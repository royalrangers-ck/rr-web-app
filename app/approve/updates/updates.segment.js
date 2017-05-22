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
                usersList: function (ApproveUpdatesService, UserService) {
                    let user = UserService.get();
                    return ApproveUpdatesService.getUsers({platoonId: user.platoon.id});
                }
            }
        });
    }
})();