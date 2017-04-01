(() => {

    'use strict';

    angular
        .module('app')
        .controller('MedalModalController', MedalModalController);

    MedalModalController.$inject = ['$uibModalInstance', 'currentModal'];
    function MedalModalController ($uibModalInstance, currentModal) {
        const vm = this;

        vm.close = close;
        vm.currentMedal = currentModal;

        function close(data) {
            $uibModalInstance.close(data);
        }

    }
})();





