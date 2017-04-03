(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileStudyController', ProfileStudyController);

    ProfileStudyController.$inject = ['$log', 'AppModalService'];
    function ProfileStudyController ($log, AppModalService) {
        const vm = this;
        vm.seminars = [
            { id: 1, name: 'Seminar 1' },
            { id: 2, name: 'Seminar 2' },
            { id: 3, name: 'Seminar 3' },
            { id: 4, name: 'Seminar 4' },
            { id: 5, name: 'Seminar 5' },
            { id: 6, name: 'Seminar 6', action: 'inProgress' },
            { id: 7, name: 'Seminar 7', action: 'notGet' }
        ];

        vm.profileModal = function (seminarId) {
            AppModalService.profileModal(findSeminar(seminarId));
        };

        vm.isInProgress = function (seminarId) {
            let currentSeminar = findSeminar(seminarId);
            return currentSeminar.action == 'inProgress';
        };

        vm.isNotGet = function (seminarId) {
            let currentSeminar = findSeminar(seminarId);
            return currentSeminar.action == 'notGet' ? 'not-get' : '';
        };

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileStrips Controller ...');
        }

        function findSeminar (seminarId) {
            return vm.seminars.find((seminar) => {
                return seminar.id === seminarId;
            });
        }
    }
})();
