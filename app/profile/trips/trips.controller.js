(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTripsController', ProfileTripsController);

    function ProfileTripsController ($log, AppModalService) {
        const vm = this;
        vm.distanceTrips = 10254;
        vm.trips = [
            { id: 1, name: 'Trip Medal 1' },
            { id: 2, name: 'Trip Medal 2' },
            { id: 3, name: 'Trip Medal 3', action: 'inProgress' },
            { id: 4, name: 'Trip Medal 4', action: 'notGet' },
            { id: 5, name: 'Trip Medal 5', action: 'notGet' },
            { id: 6, name: 'Trip Medal 6', action: 'notGet' },
            { id: 7, name: 'Trip Medal 7', action: 'notGet' },
            { id: 8, name: 'Trip Medal 8', action: 'notGet' },
            { id: 9, name: 'Trip Medal 9', action: 'notGet' }
        ];

        vm.profileModal = function (tripId) {
            AppModalService.profileModal(findTrip(tripId));
        };

        vm.isInProgress = function (tripId) {
            let currentTrip = findTrip(tripId);
            return currentTrip.action == 'inProgress';
        };

        vm.isNotGet = function (tripId) {
            let currentTrip = findTrip(tripId);
            return currentTrip.action == 'notGet' ? 'not-get' : '';
        };

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileTrips Controller ...');
        }

        function findTrip (tripId) {
            return vm.trips.find((trip) => {
                return trip.id === tripId;
            });
        }
    }
})();
