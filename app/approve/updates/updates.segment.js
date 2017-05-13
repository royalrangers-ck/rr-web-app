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
                usersList: function (ApproveUpdatesService, $rootScope) {
                    return ApproveUpdatesService.getUsers({platoonId: $rootScope.currentUser.platoon.id});
                },
                platoons: function (ApproveUpdatesService){
                    return ApproveUpdatesService.allPlatoons();
                }
            }
        });
    }
})();