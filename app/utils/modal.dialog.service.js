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

        function profileModal (_currentAchieve) {

            return $uibModal.open({
                animation: true,
                templateUrl: 'profile/profile.modal/modal.html',
                controller: 'ProfileModalController',
                controllerAs: 'vm',
                resolve: {
                    currentAchieve: function () {
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
    }
})();
