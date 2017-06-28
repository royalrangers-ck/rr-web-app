(() => {

    'use strict';

    angular
        .module('app')
        .config(ChangePasswordSegment);

    function ChangePasswordSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/changePassword', 'changePassword').segment('changePassword', {
            templateUrl: 'utils/auth/change.password/change.password.html',
            controller: 'ChangePasswordController',
            controllerAs: 'vm',
            dependencies: ['token'],
            resolve: {
                tokenResponse: function ($routeParams) {
                    return $routeParams.token
                }
            }
        });
    }
})();