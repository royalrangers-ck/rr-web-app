(function () {

    'use strict';

    angular
        .module('app')
        .service('AppModalService', AppModalService);

    AppModalService.$inject = ['$uibModal'];
    function AppModalService($uibModal) {

        this.profileMedalModal = profileMedalModal;
        this.UploadUserLogo = UploadUserLogo;

        function profileMedalModal(_currentMedal) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'profile/medal/profileMedalModal/medal.modal.html',
                controller: 'MedalModalController',
                controllerAs: 'vm',
                resolve: {
                    currentModal: function () {
                        return _currentMedal;
                    }
                }
            });
        }

        function UploadUserLogo() {
            return $uibModal.open({
                animation: true,
                templateUrl: 'utils/upload.user.logo/upload.user.logo.modal.html',
                controller: 'UploadUserLogoController',
                controllerAs: 'vm',
                // size: 'lg'
            })
        }
    }
})();