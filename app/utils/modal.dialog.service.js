(function () {

    'use strict';

    angular
        .module('app')
        .service('AppModalService', AppModalService);

    function AppModalService($uibModal) {

        this.profileModal = profileModal;
        this.approveUserModal = approveUserModal;
        this.updatesUserModal = updatesUserModal;
        this.editUserModal = editUserModal;
        this.uploadUserLogo = uploadUserLogo;
        this.taskFormModal = taskFormModal;
        this.testFormModal = testFormModal;

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

        function testFormModal () {
            return $uibModal.open({
                animation: true,
                templateUrl: 'profile/tests/test.form.modal/test.form.modal.html',
                controller: 'TestFormModalController',
                controllerAs: 'vm'
            });
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