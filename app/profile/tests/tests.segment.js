(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileTestsSegment);

    function ProfileTestsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/tests', 'profile.tests')
            .within('profile')
            .segment('tests', {
                'default': true,
                templateUrl: 'profile/tests/tests.html',
                controller: 'ProfileTestsController',
                controllerAs: 'vm'
            });
    }
})();
