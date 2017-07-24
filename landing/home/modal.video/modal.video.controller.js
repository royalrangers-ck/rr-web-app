(() => {

    'use strict';

    angular
        .module('app')
        .controller('ModalVideoController', ModalVideoController);

    function ModalVideoController($uibModalInstance) {
        const vm = this;

        vm.close = close;

        function close(data) {
            $uibModalInstance.close(data);
        }

    }
})();
