(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileCampsController', ProfileCampsController);

    function ProfileCampsController ($log, AppModalService) {
        const vm = this;
        vm.inCampsDay = 459;
        vm.camps = [
            { id: 1, name: 'Camp Medal 1' },
            { id: 2, name: 'Camp Medal 2' },
            { id: 3, name: 'Camp Medal 3' },
            { id: 4, name: 'Camp Medal 4' },
            { id: 5, name: 'Camp Medal 5', action: 'inProgress' },
            { id: 6, name: 'Camp Medal 6', action: 'notGet' },
            { id: 7, name: 'Camp Medal 7', action: 'notGet' },
            { id: 8, name: 'Camp Medal 8', action: 'notGet' },
            { id: 9, name: 'Camp Medal 9', action: 'notGet' }
        ];

        vm.profileModal = function (campId) {
            AppModalService.profileModal(findCamp(campId));
        };

        vm.isInProgress = function (campId) {
            let currentCamp = findCamp(campId);
            return currentCamp.action == 'inProgress';
        };

        vm.isNotGet = function (campId) {
            let currentCamp = findCamp(campId);
            return currentCamp.action == 'notGet' ? 'not-get' : '';
        };

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileCamps Controller ...');
        }

        function findCamp (campId) {
            return vm.camps.find((camp) => {
                return camp.id === campId;
            });
        }
    }
})();
