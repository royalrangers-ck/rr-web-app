(() => {

    'use strict';

    angular
        .module('admin')
        .controller('ImgUploadController', ImgUploadController);

    function ImgUploadController($uibModalInstance) {
        const vm = this;

        vm.image = {
            defaultImage: null,
            croppedImage: null,
            formDataImage: null
        };

        vm.dismiss = dismiss;
        vm.save = save;

        ////

        // Modal reject
        function dismiss() {
            $uibModalInstance.dismiss('Cancel');
        }

        // Modal response
        function save() {
            vm.image.formDataImage = createFormDataObj(vm.image.croppedImage, 'imageForPostingOnService.img');
            $uibModalInstance.close(vm.image);
        }

        /*  !!! Note for posting form data object to back-end your request must be:
                   let request = {
                        method: 'POST',
                        url: 'You url',
                        transformRequest: angular.identity,
                        headers: {
                            'Content-Type': undefined,
                            'Autorization': userToken
                            },
                        data: formdata
                    };
         */

        function createFormDataObj(dataUrl, filename) {
            let arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            let file = new File([u8arr], filename, {type: mime});

            /* https://developer.mozilla.org/en-US/docs/Web/API/FormData */
            let formData = new FormData();
            formData.append('file', file);

            return formData
        }

    }
})();
