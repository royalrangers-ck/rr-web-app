/**
 * Modal Dialog Service
 * @namespace Services
 */
(function () {

    'use strict';

    angular
        .module('admin')
        .service('ModalDialogService', ModalDialogService);

    function ModalDialogService($uibModal, UserService) {

        this.profileModal = profileModal;
        this.editUserModal = editUserModal;
        this.uploadUserLogo = uploadUserLogo;

        ///

        function profileModal(achievement, type) {

            return $uibModal.open({
                animation: true,
                templateUrl: 'profile/profile.modal/modal.html',
                controller: 'ProfileModalController',
                controllerAs: 'vm',
                resolve: {
                    achievement: function () {
                        achievement.achievementType = type;
                        return achievement;
                    }
                }
            }).result.then(function () {
                // result (promise) - Is resolved when a modal is closed and rejected when a modal is dismissed.
            }, function (res) {
            });
        }

        function editUserModal() {

            return $uibModal.open({
                animation: true,
                templateUrl: 'edit.user.modal/edit.user.modal.html',
                controller: 'EditUserModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    currentUser: () => {
                        return UserService.get();
                    }
                }
            }).result.then(function () {
                // result (promise) - Is resolved when a modal is closed and rejected when a modal is dismissed.
            }, function (res) {
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
            }).result.then(function () {
                // result (promise) - Is resolved when a modal is closed and rejected when a modal is dismissed.
            }, function (res) {
            })
        }

    }
})();
