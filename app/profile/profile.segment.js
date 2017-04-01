(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileSegment);

    ProfileSegment.$inject = ['$routeSegmentProvider'];
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