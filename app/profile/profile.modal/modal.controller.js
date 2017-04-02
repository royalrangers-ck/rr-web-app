(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileModalController', ProfileModalController);

    ProfileModalController.$inject = ['$uibModalInstance', 'currentAchieve'];
    function ProfileModalController ($uibModalInstance, currentAchieve) {
        const vm = this;

        vm.close = close;
        vm.currentAchieve = currentAchieve;

        function close(data) {
            $uibModalInstance.close(data);
        }
    }
})();
