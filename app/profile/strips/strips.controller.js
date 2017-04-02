(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileStripsController', ProfileStripsController);

    ProfileStripsController.$inject = ['$log', 'AppModalService'];
    function ProfileStripsController ($log, AppModalService) {
        const vm = this;
        vm.strips = [
            { id: 1, name: 'Ribbon of Valor' },
            { id: 2, name: 'Outstanding Courage Ribbon' },
            { id: 3, name: 'Honor Gold Medal of Achievement Ribbon' },
            { id: 4, name: 'Global Leadership Award Ribbon' },
            { id: 5, name: 'National Meritorious Ribbon' },
            { id: 6, name: 'National Outstanding Service Ribbon' },
            { id: 7, name: 'Medal of Excellence Ribbon' },
            { id: 8, name: 'Missions Project Ribbon' },
            { id: 9, name: 'National Executive Leadership Award Ribbon' },
            { id: 10, name: 'National Staff Leadership Award Ribbon' },
            { id: 11, name: 'Historical Leader’s Gold Star Ribbon' },
            { id: 12, name: 'National Leadership Award Ribbon' },
            { id: 13, name: 'or Historical Leader’s Gold Eagle Ribbon' },
            { id: 14, name: 'Outstanding Service Ribbon' },
            { id: 15, name: 'Organizational Executive Leadership Award Ribbon' },
            { id: 16, name: 'Organizational Staff Leadership Award Ribbon' },
            { id: 17, name: 'Historical Silver Eagle or Silver Cluster Ribbon' },
            { id: 18, name: 'Historical Gold Cluster or Blue Cluster Ribbon' },
            { id: 19, name: 'Pastor’s Ribbon' },
            { id: 20, name: 'Outpost Coordinator’s Ribbon' },
            { id: 21, name: 'Outpost Leadership Ribbon' },
            { id: 22, name: 'Outpost Leader’s Service Ribbon' },
            { id: 23, name: 'Historical training ribbon (LMA)', action: 'inProgress' },
            { id: 24, name: 'Trail of the Saber Ribbon', action: 'inProgress' },
            { id: 25, name: 'Special Service Ribbon', action: 'inProgress' },
            { id: 26, name: 'Continuous Learning Skills Training Ribbon' },
            { id: 27, name: 'Continuous Learning Training Workshop Ribbon' },
            { id: 28, name: 'Highest Advancement Ribbon earned as a Ranger' },
            { id: 29, name: 'Trail of the Saber Ribbon' },
            { id: 30, name: 'Junior Leaders Service Ribbon' },
            { id: 31, name: 'Expedition Rangers Achievement Ribbon' },
            { id: 32, name: 'Historical Gold Medal of Achievement Ribbon' },
            { id: 33, name: 'Adventure Rangers Achievement Ribbon', action: 'notGet' },
            { id: 34, name: 'Discovery Rangers Achievement Ribbon', action: 'notGet' },
            { id: 35, name: 'Ranger Kids Achievement Ribbon', action: 'notGet' },
            { id: 36, name: 'Sky Blue Merit Ribbon', action: 'notGet' },
            { id: 37, name: 'Platinum Merit Ribbon', action: 'notGet' },
            { id: 38, name: 'Yellow Merit Ribbon', action: 'notGet' },
            { id: 39, name: 'Green Merit Ribbon', action: 'notGet' },
            { id: 40, name: 'Brown Merit Ribbon', action: 'notGet' },
            { id: 41, name: 'Red Merit Ribbon', action: 'notGet' },
            { id: 42, name: 'Blue Merit Ribbon', action: 'notGet' },
            { id: 43, name: 'Orange Merit Ribbon', action: 'notGet' }
        ];

        vm.profileModal = function (stripId) {
            AppModalService.profileModal(findStrip(stripId));
        };

        vm.isInProgress = function (stripId) {
            let currentStrip = findStrip(stripId);
            return currentStrip.action == 'inProgress';
        };

        vm.isNotGet = function (stripId) {
            let currentStrip = findStrip(stripId);
            return currentStrip.action == 'notGet' ? 'not-get' : '';
        };

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileStrips Controller ...');
        }

        function findStrip (stripId) {
            return vm.strips.find((strip) => {
                return strip.id === stripId;
            });
        }
    }
})();
