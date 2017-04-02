(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileMedalController', ProfileMedalController);

    ProfileMedalController.$inject = ['$log', 'AppModalService'];
    function ProfileMedalController ($log, AppModalService) {
        const vm = this;
        vm.medals = [
            { id: 1, name: 'Medal of Valor'},
            { id: 2, name: 'Outstanding Courage Medal'},
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
            vm.currentMedal = vm.medals.find((medal) => {
                return medal.id === medalId;
            });

            AppModalService.profileMedalModal(vm.currentMedal);
        };

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileController ...');
        }
    }
})();