(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileCampsSegment);

    function ProfileCampsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/camps', 'profile.camps')
            .within('profile')
            .segment('camps', {
                templateUrl: 'profile/camps/camps.html',
                controller: 'ProfileCampsController',
                controllerAs: 'vm'
            });
    }
})();
