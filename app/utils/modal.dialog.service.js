(function () {

    'use strict';

    angular
        .module('app')
        .service('AppModalService', AppModalService);

    AppModalService.$inject = ['$uibModal'];
    function AppModalService($uibModal) {


        this.UploadUserLogo = UploadUserLogo;

        function UploadUserLogo() {
            return $uibModal.open({
                animation: true,
                templateUrl: 'utils/upload.user.logo/upload.user.logo.modal.html',
                controller: 'UploadUserLogoController',
                controllerAs: 'vm',
                // size: 'lg'
            });
        }
    }
})();