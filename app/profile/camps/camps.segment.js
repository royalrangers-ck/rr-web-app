(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileCampsSegment);

    ProfileCampsSegment.$inject = ['$routeSegmentProvider'];
    function ProfileCampsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/camps', 'profile.camps')
            .within('profile')
            .segment('camps', {
                'default': true,
                templateUrl: 'profile/camps/camps.html',
                controller: 'ProfileCampsController',
                controllerAs: 'vm'
            });
    }
})();
