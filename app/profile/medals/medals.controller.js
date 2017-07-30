(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileMedalsController', ProfileMedalsController);

    function ProfileMedalsController ($log, AppModalService) {
        const vm = this;
        vm.medals = [
            { id: 1, name: 'Medal of Valor'},
            { id: 2, name: 'Outstanding Courage Medal'},
            { id: 3, name: 'Honor Gold Medal of Achievement'},
            { id: 4, name: 'Global Leadership Award Medal'},
            { id: 5, name: 'National Meritorious Medal', action: 'inProgress'},
            { id: 6, name: 'National Outstanding Service Medal', action: 'inProgress'},
            { id: 7, name: 'Medal of Excellence'},
            { id: 8, name: 'National Leadership Award Medal'},
            { id: 9, name: 'Organizational Executive Leadership Award Medal', action: 'notGet'},
            { id: 10, name: 'Organizational Staff Leadership Award Medal', action: 'notGet'},
            { id: 11, name: 'Pastor’s Medal', action: 'notGet'},
            { id: 12, name: 'Historical training medal (LMA)', action: 'notGet'},
            { id: 13, name: 'Trail of the Saber Medal', action: 'notGet'},
            { id: 14, name: 'Highest advancement medal earned as a boy', action: 'notGet'}
        ];

        vm.profileModal = function (medalId) {
            AppModalService.profileModal(findMedal(medalId));
        };

        vm.isInProgress = function (medalId) {
            let currentMedal = findMedal(medalId);
            return currentMedal.action == 'inProgress';
        };

        vm.isNotGet = function (medalId) {
            let currentMedal = findMedal(medalId);
            return currentMedal.action == 'notGet' ? 'not-get' : '';
        };

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileMedalsController ...');
        }

        function findMedal (medalId) {
            return vm.medals.find((medal) => {
                return medal.id === medalId;
            });
        }
    }
})();
