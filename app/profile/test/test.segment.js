(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileTestSegment);

    function ProfileTestSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/test/:id', 'profile.test')
            .within('profile')
            .segment('test', {
                templateUrl: 'profile/test/test.html',
                controller: 'ProfileTestController',
                controllerAs: 'vm',
                dependencies: ['id'],
                resolve: {
                    testResolve: function (ProfileTestService, $routeParams) {
                        return ProfileTestService.getTest({id: $routeParams.id});
                    },
                    userTestsResolve: function (ProfileTestService) {
                        return ProfileTestService.getUserTests();
                    }
                }
            });
    }
})();
