(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileModalController', ProfileModalController);

    ProfileModalController.$inject = ['$uibModalInstance', 'achievement'];
    function ProfileModalController ($uibModalInstance, achievement) {
        const vm = this;

        vm.close = close;
        vm.achievement = achievement;

        function close(data) {
            $uibModalInstance.close(data);
        }
    }
})();
