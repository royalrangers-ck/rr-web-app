(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileSegment);

    function ProfileSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile', 'profile')
            .segment('profile', {
                templateUrl: 'profile/profile.html',
                controller: 'ProfileController'
            });
    }
})();