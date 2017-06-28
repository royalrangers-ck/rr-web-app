(function () {

    'use strict';

    angular
        .module('app')
        .service('AppModalService', AppModalService);

    function AppModalService($uibModal, UserService) {

        this.profileModal = profileModal;
        this.approveUserRegistrationModal = approveUserRegistrationModal;
        this.approveUserUpdateModal = approveUserUpdateModal;
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
            }).result.then(function () {
                // result (promise) - Is resolved when a modal is closed and rejected when a modal is dismissed.
            }, function (res) {});
        }

        function approveUserRegistrationModal(currentUser) {

            return $uibModal.open({
                animation: true,
                templateUrl: 'approve/registrations/approve.user.registration/approve.user.registration.modal.html',
                controller: 'ApproveUserRegistrationModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    currentUser: () => {
                        return angular.copy(currentUser);
                    }
                }
            }).result.then(function () {
                // result (promise) - Is resolved when a modal is closed and rejected when a modal is dismissed.
            }, function (res) {});
        }

        function approveUserUpdateModal(modifiedUser) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'approve/updates/approve.user.update/approve.user.update.modal.html',
                controller: 'ApproveUserUpdateModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    originalUser: function (UserFactory) {
                        return UserFactory.get({userId: modifiedUser.userId}).$promise;
                    },
                    modifiedUser: () => {
                        return modifiedUser;
                    }
                }
            }).result.then(function () {
                // result (promise) - Is resolved when a modal is closed and rejected when a modal is dismissed.
            }, function (res) {});
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
                    },
                    tempUser: () => {
                        return UserService.getTempUser();
                    }
                }
            }).result.then(function () {
                // result (promise) - Is resolved when a modal is closed and rejected when a modal is dismissed.
            }, function (res) {});
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
            }, function (res) {})
        }

        function testFormModal () {
            return $uibModal.open({
                animation: true,
                templateUrl: 'profile/tests/test.form.modal/test.form.modal.html',
                controller: 'TestFormModalController',
                controllerAs: 'vm'
            }).result.then(function () {
                // result (promise) - Is resolved when a modal is closed and rejected when a modal is dismissed.
            }, function (res) {});
        }

        function taskFormModal (test) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'profile/test/task.form.modal/task.form.modal.html',
                controller: 'TaskFormModalController',
                controllerAs: 'vm',
                resolve: {
                    currentTest: () => {
                        return test;
                    }
                }
            }).result.then(function () {
                // result (promise) - Is resolved when a modal is closed and rejected when a modal is dismissed.
            }, function (res) {});
        }
    }
})();