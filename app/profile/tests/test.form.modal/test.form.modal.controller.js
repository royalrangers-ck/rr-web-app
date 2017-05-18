(() => {

    'use strict';

    angular
        .module('app')
        .controller('TestFormModalController', TestFormModalController);

    TestFormModalController.$inject = ['$uibModalInstance'];
    function TestFormModalController ($uibModalInstance) {
        const vm = this;

        vm.close = close;

        function close(data) {
            $uibModalInstance.close(data);
        }
    }
})();
