(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileStarsController', ProfileStarsController);

    ProfileStarsController.$inject = ['$log', 'AppModalService'];
    function ProfileStarsController ($log, AppModalService) {
        const vm = this;
        vm.stars = {
            bronze: [
                { id: 1, name: 'Bronze Stars 1' },
                { id: 2, name: 'Bronze Stars 2', action: 'inProgress' },
                { id: 3, name: 'Bronze Stars 3', action: 'notGet' },
                { id: 4, name: 'Bronze Stars 4', action: 'notGet' },
                { id: 5, name: 'Bronze Stars 5', action: 'notGet' }
            ],
            silver: [
                { id: 1, name: 'Silver Stars 1' },
                { id: 2, name: 'Silver Stars 2' },
                { id: 3, name: 'Silver Stars 3', action: 'inProgress' },
                { id: 4, name: 'Silver Stars 4', action: 'notGet' },
                { id: 5, name: 'Silver Stars 5', action: 'notGet' }
            ],
            gold: [
                { id: 1, name: 'Gold Stars 1' },
                { id: 2, name: 'Gold Stars 2' },
                { id: 3, name: 'Gold Stars 3' },
                { id: 4, name: 'Gold Stars 4', action: 'inProgress' },
                { id: 5, name: 'Gold Stars 5', action: 'notGet' }
            ]
        };

        vm.profileModal = function (starId, stuff) {
            AppModalService.profileModal(findStar(starId, stuff));
        };

        vm.isInProgress = function (starId, stuff) {
            let currentStar = findStar(starId, stuff);
            return currentStar.action == 'inProgress';
        };

        vm.isNotGet = function (starId, stuff) {
            let currentStar = findStar(starId, stuff);
            return currentStar.action == 'notGet' ? 'not-get' : '';
        };

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileCamps Controller ...');
        }

        function findStar (starId, stuff) {
            return vm.stars[stuff].find((star) => {
                return star.id === starId;
            });
        }
    }
})();
