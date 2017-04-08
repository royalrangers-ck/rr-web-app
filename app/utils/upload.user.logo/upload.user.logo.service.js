(function () {

    'use strict';

    angular
        .module('app')
        .service('UploadUserLogoService', UploadUserLogoService);

    UploadUserLogoService.$inject = ['UploadUserLogoFactory'];
    function UploadUserLogoService(UploadUserLogoFactory) {

        this.uploadImage = UploadUserLogoFactory.uploadImage;

    }

})();