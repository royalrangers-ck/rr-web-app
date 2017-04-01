(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileMedalController', ProfileMedalController);

    ProfileMedalController.$inject = ['$log', 'AppModalService'];
    function ProfileMedalController ($log, AppModalService) {
        const vm = this;
        vm.medals = [
            { id: 1, name: 'Medal of Valor', action: 'inProgress'},
            { id: 2, name: 'Outstanding Courage Medal', action: 'notGet'},
            { id: 3, name: 'Honor Gold Medal of Achievement'},
            { id: 4, name: 'Global Leadership Award Medal'},
            { id: 5, name: 'National Meritorious Medal'},
            { id: 6, name: 'National Outstanding Service Medal'},
            { id: 7, name: 'Medal of Excellence'},
            { id: 8, name: 'National Leadership Award Medal'},
            { id: 9, name: 'Organizational Executive Leadership Award Medal'},
            { id: 10, name: 'Organizational Staff Leadership Award Medal'},
            { id: 11, name: 'Pastor’s Medal'},
            { id: 12, name: 'Historical training medal (LMA)'},
            { id: 13, name: 'Trail of the Saber Medal'},
            { id: 14, name: 'Highest advancement medal earned as a boy'}
        ];

        vm.profileMedalModal = function (medalId) {
            AppModalService.profileMedalModal(findMedal(medalId));
        };

        vm.isInProgress = function (medalId) {
            let currentMedal = findMedal(medalId);
            return currentMedal.action == 'inProgress';
        };

        vm.isNotGet = function (medalId) {
            let currentMedal = findMedal(medalId);
            $log.debug('currentMedal:', medalId);
            return currentMedal.action == 'notGet' ? 'not-get' : '';
        };

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileController ...');
        }

        function findMedal (medalId) {
            return vm.medals.find((medal) => {
                return medal.id === medalId;
            });
        }
    }
})();
