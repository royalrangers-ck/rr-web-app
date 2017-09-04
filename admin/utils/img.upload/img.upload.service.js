(function () {

    'use strict';

    angular
        .module('admin')
        .service('ImgUploadService', ImgUploadService);

    function ImgUploadService($uibModal) {

        this.uploadImage = uploadImage;

        ///

        /**
         * @description Function which call modal window, where you can choose image.
         * @return {promise}
         */
        function uploadImage() {
            let uploadImage = $uibModal.open({
                animation: true,
                templateUrl: 'utils/img.upload/img.upload.modal.html',
                controller: 'ImgUploadController',
                controllerAs: 'vm',
                backdrop: false
            });

            return uploadImage.result
        }


    }
})();
