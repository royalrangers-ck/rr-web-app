(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileTripsSegment);

    function ProfileTripsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/trips', 'profile.trips')
            .within('profile')
            .segment('trips', {
                templateUrl: 'profile/trips/trips.html',
                controller: 'ProfileTripsController',
                controllerAs: 'vm'
            });
    }
})();
