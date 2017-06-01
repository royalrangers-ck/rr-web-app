(() => {

    'use strict';

    angular
        .module('app')
        .controller('VideoModalController', VideoModalController);

    function VideoModalController($uibModalInstance) {
        const vm = this;

        vm.close = close;

        function close(data) {
            $uibModalInstance.close(data);
        }

    }
})();
