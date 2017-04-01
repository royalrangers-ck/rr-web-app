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
        vm.noImageAvailable = 'http://kingofwallpapers.com/troll-face/troll-face-001.jpg';
        vm.filename = '';
        vm.data = {};
        //


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