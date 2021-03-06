(() => {

    'use strict';

    angular
        .module('admin')
        .config(ApproveUpdatesSegment);

    function ApproveUpdatesSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/approve/updates', 'ApproveUpdates').segment('ApproveUpdates', {
            templateUrl: 'approve/updates/approve.updates.html',
            controller: 'ApproveUpdatesController',
            controllerAs: 'vm',
            resolve: {
                users: function (UserFactory) {
                    return UserFactory.getApproveUpdateUsers().$promise;
                }
            }
        });
    }
})();
