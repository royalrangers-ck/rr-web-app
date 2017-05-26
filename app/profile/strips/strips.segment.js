(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileMedalsSegment);

    function ProfileMedalsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/strips', 'profile.strips')
            .within('profile')
            .segment('strips', {
                'default': true,
                templateUrl: 'profile/strips/strips.html',
                controller: 'ProfileStripsController',
                controllerAs: 'vm'
            });
    }
})();
