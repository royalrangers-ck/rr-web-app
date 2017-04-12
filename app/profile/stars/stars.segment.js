(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileStarsSegment);

    ProfileStarsSegment.$inject = ['$routeSegmentProvider'];
    function ProfileStarsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/stars', 'profile.stars')
            .within('profile')
            .segment('stars', {
                'default': true,
                templateUrl: 'profile/stars/stars.html',
                controller: 'ProfileStarsController',
                controllerAs: 'vm'
            });
    }
})();
