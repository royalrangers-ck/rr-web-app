(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileModalController', ProfileModalController);

    function ProfileModalController ($uibModalInstance, achievement) {
        const vm = this;

        vm.close = close;
        vm.achievement = achievement;

        function close(data) {
            $uibModalInstance.close(data);
        }
    }
})();
