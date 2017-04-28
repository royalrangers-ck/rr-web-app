(() => {
    'use strict';

    angular
        .module('app')
        .controller('UploadUserLogoController', UploadUserLogoController);

    UploadUserLogoController.$inject = ['$log', '$uibModalInstance', 'UploadUserLogoService', 'growl', '$rootScope', 'AppModalService'];
    function UploadUserLogoController($log, $uibModalInstance, UploadUserLogoService, growl, $rootScope, AppModalService) {
        const vm = this;

        vm.close = close;
        vm.uploadImage = uploadImage;
        vm.editUserModal = AppModalService.editUserModal;
        vm.avatarUrl = $rootScope.avatarUrl;
        vm.formData = new FormData(); // Special native API for uploading avatar

        vm.noImageAvailable = 'static/vendor/images/user.png';
        vm.data = {
            image: vm.avatarUrl,
            croppedImage: '',
        };
        /* data.image - contain image url, which represented in modal */

        activate();

        function activate() {
            $log.debug('Init UploadUserLogoController ...');
        }

        function close() {
            $uibModalInstance.close();
            vm.editUserModal();
        }

        /**
         * @description Function for convert dataUrl (base 64) in JS object file
         * Need for formData uploading
         * @param dataurl
         * @param filename
         * @returns {File}
         */
        function dataURLtoFile(dataurl, filename) {
            let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type: mime});
        }

        function uploadImage() {
            if (!vm.data.image) {
                growl.error('You must choose image first', {
                    ttl: 5000,
                    disableCountDown: true,
                });
                return
            }

            let file = dataURLtoFile(vm.data.croppedImage, 'img.png');
            vm.formData.append('file', file);
            /* Adding in form image file with key 'file'*/

            let loading = growl.info('Uploading... Please wait', {
                ttl: 15000, // 15 sec
                disableCountDown: true,
            });

            UploadUserLogoService.uploadImage(vm.formData, function (response) {
                loading.destroy(); // Destroy loading growl notification
                if (response.success) {
                    growl.success('Avatar successful change', {
                        ttl: 3000, // 3 sec
                        disableCountDown: true,
                        onclose: function () {
                            vm.close();
                        }
                    });
                } else {
                    growl.error('Upload error \n' + response.data.message, {
                        ttl: 15000, // 15 sec
                        disableCountDown: true,
                    });
                }
            });
        }
    }

})();