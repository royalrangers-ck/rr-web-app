(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileTestSegment);

    ProfileTestSegment.$inject = ['$routeSegmentProvider'];
    function ProfileTestSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/test/:id', 'profile.test')
            .within('profile')
            .segment('test', {
                templateUrl: 'profile/test/test.html',
                controller: 'ProfileTestController',
                controllerAs: 'vm',
                dependencies: ['id']
            });
    }
})();
