(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileTripsSegment);

    ProfileTripsSegment.$inject = ['$routeSegmentProvider'];
    function ProfileTripsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/trips', 'profile.trips')
            .within('profile')
            .segment('trips', {
                'default': true,
                templateUrl: 'profile/trips/trips.html',
                controller: 'ProfileTripsController',
                controllerAs: 'vm'
            });
    }
})();
