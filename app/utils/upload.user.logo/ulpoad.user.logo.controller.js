(() => {
    'use strict';

    angular
        .module('app')
        .controller('UploadUserLogoController', UploadUserLogoController);

    UploadUserLogoController.$inject = ['$log', '$uibModalInstance'];
    function UploadUserLogoController($log, $uibModalInstance) {
        const vm = this;

        vm.close = close;
        // File upload
        vm.noImageAvailable = 'static/images/user.png';
        /* data.image - contain image, which was uploaded */
        vm.data = {
            image: ''
        };

        activate();

        ////

        function activate() {
            $log.debug('Init UploadUserLogoController ...');
        }

        function close(data) {
            $uibModalInstance.close(data);
        }
    }
})();