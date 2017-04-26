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

        vm.noImageAvailable = 'static/vendor/images/user.png';
        vm.data = {
            image: vm.avatarUrl,
            formData: ''
        };
        /* data.image - contain image url, which represented in modal */
        /* data.formData - contain image file, which will upload */

        activate();

        function activate() {
            $log.debug('Init UploadUserLogoController ...');
        }

        function close() {
            $uibModalInstance.close();
            vm.editUserModal();
        }

        function uploadImage() {
            if (!vm.data.formData) {
                growl.error('Ви маєте вибрати зображення', {
                    ttl: 5000,
                    disableCountDown: true,
                });
                return
            }

            UploadUserLogoService.uploadImage(vm.data.formData, function (response) {
                if (response.success) {
                    growl.info('Нове зображення успішно завантажене', {
                        ttl: 15000, // 15 sec
                        disableCountDown: true,
                    });
                    vm.close();
                }

                growl.error('Помилка завантаження \n' + response, {
                    ttl: 15000, // 15 sec
                    disableCountDown: true,
                });

            });

            growl.info('Іде завантаження, будь-ласка зачекайте...', {
                ttl: 15000, // 15 sec
                disableCountDown: true,
            });

        }
    }

})();