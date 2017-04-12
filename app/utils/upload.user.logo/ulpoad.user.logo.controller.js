(() => {
    'use strict';

    angular
        .module('app')
        .controller('UploadUserLogoController', UploadUserLogoController);

    UploadUserLogoController.$inject = ['$log', '$uibModalInstance', 'UploadUserLogoService', 'growl'];
    function UploadUserLogoController($log, $uibModalInstance, UploadUserLogoService, growl) {
        const vm = this;

        vm.close = close;
        vm.uploadImage = uploadImage;

        vm.noImageAvailable = 'static/vendor/images/user.png';
        vm.data = {
            image: '',
            formData: ''
        };
        /* data.image - contain image url, which represented in modal */
        /* data.formData - contain image file, which will upload */

        activate();

        function activate() {
            $log.debug('Init UploadUserLogoController ...');
        }

        function close(data) {
            $uibModalInstance.close(data);
        }

        function uploadImage() {
            if (!vm.data.formData) {
                growl.error('Ви маєте вибрати зображення');
                return
            }
            UploadUserLogoService.uploadImage(vm.data.formData);

        }
    }

})();