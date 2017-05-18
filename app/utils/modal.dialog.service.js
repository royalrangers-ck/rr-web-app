(function () {

    'use strict';

    angular
        .module('app')
        .service('AppModalService', AppModalService);

    AppModalService.$inject = ['$uibModal'];
    function AppModalService($uibModal) {

        this.profileModal = profileModal;
        this.approveCurrentUserModal = approveCurrentUserModal;
        this.editUserModal = editUserModal;
        this.uploadUserLogo = uploadUserLogo;
        this.taskFormModal = taskFormModal;

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

        function approveCurrentUserModal(_currentUser) {

            return $uibModal.open({
                animation: true,
                templateUrl: 'confirmUsers/approve.current.user.modal/approve.current.user.modal.html',
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

        function taskFormModal () {
            return $uibModal.open({
                animation: true,
                templateUrl: 'profile/test/task.form.modal/task.form.modal.html',
                controller: 'TaskFormModalController',
                controllerAs: 'vm'
            });
        }
    }
})();