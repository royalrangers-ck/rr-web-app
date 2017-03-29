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
            controllerAs: 'vm'
        });
    }
})();