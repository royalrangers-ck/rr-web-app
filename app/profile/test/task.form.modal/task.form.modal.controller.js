(() => {

    'use strict';

    angular
        .module('app')
        .controller('TaskFormModalController', TaskFormModalController);

    TaskFormModalController.$inject = ['$uibModalInstance'];
    function TaskFormModalController ($uibModalInstance) {
        const vm = this;

        vm.close = close;

        function close(data) {
            $uibModalInstance.close(data);
        }
    }
})();
