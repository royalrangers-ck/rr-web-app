(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsKidsController', AchievementsKidsController);

    function AchievementsKidsController (AppModalService) {
        const vm = this;

        vm.achievementsModal = achievementsModal;

        activate();

        ///

        function activate() {}

        function achievementsModal () {
            AppModalService.achievementsModal();
        }
    }
})();
