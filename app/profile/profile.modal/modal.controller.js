(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileModalController', ProfileModalController);

    function ProfileModalController ($uibModalInstance, achievement, $log) {
        const vm = this;

        vm.close = close;
        vm.removeTest = removeTest;
        vm.achievement = achievement;

        function close(data) {
            $uibModalInstance.close(data);
        }

        function removeTest() {
            $log.debug('pressed \'RemoveTest\' button');
        }
    }
})();
