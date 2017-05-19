(function () {

    'use strict';

    angular
        .module('app')
        .service('AppModalService', AppModalService);

    AppModalService.$inject = ['$uibModal'];
    function AppModalService($uibModal) {

        this.profileModal = profileModal;
        this.approveUserModal = approveUserModal;
        this.updatesUserModal = updatesUserModal;
        this.editUserModal = editUserModal;
        this.uploadUserLogo = uploadUserLogo;

        function profileModal(_currentAchieve, _type) {

            return $uibModal.open({
                animation: true,
                templateUrl: 'profile/profile.modal/modal.html',
                controller: 'ProfileModalController',
                controllerAs: 'vm',
                resolve: {
                    currentAchieve: function () {
                        _currentAchieve.type = _type;
                        return _currentAchieve;
                    }
                }
            });
        }

        function approveUserModal(_currentUser) {

            return $uibModal.open({
                animation: true,
                templateUrl: 'approve/registrations/approve.user.modal/approve.user.modal.html',
                controller: 'ApproveCurrentUserModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    currentUser: function () {
                        return _currentUser;
                    }
                }
            });
        }

        function updatesUserModal(_currentUser) {

            return $uibModal.open({
                animation: true,
                templateUrl: 'approve/updates/updates.user.modal/updates.user.modal.html',
                controller: 'UpdatesCurrentUserModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    currentUser: function () {
                        return _currentUser;
                    }
                }
            });
        }

        function editUserModal() {
            
            return $uibModal.open({
                animation: true,
                templateUrl: 'edit.user.modal/edit.user.modal.html',
                controller: 'EditUserModalController',
                controllerAs: 'vm',
                size: 'lg'
            });
        }

        function uploadUserLogo(options) {
            options || (options = {});

            return $uibModal.open({
                animation: true,
                templateUrl: 'utils/upload.user.logo/upload.user.logo.modal.html',
                controller: 'UploadUserLogoController',
                controllerAs: 'vm',
                resolve: {
                    options: () => {
                        return options;
                    }
                }
            })
        }
    }
})();