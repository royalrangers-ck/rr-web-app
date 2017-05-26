(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileSegment);

    function ProfileSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile', 'profile')
            .segment('profile', {
                'default': true,
                templateUrl: 'profile/profile.html',
                controller: 'ProfileController'
            });
    }
})();