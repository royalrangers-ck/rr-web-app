(() => {

    'use strict';

    angular
        .module('app')
        .config(ConfirmUsersSegment);

    ConfirmUsersSegment.$inject = ['$routeSegmentProvider'];
    function ConfirmUsersSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/confirm-users', 'confirmUsers').segment('confirmUsers', {
            templateUrl: 'confirmUsers/confirm.users.html',
            controller: 'ConfirmUsersController',
            controllerAs: 'vm',
            resolve: {
                usersList: function (ConfirmUsersService, $rootScope) {
                    return ConfirmUsersService.getUsers({platoonId: $rootScope.currentUser.platoonId});
                },
                platoons: function (ConfirmUsersService){
                    return ConfirmUsersService.allPlatoons();
                }
            }
        });
    }
})();