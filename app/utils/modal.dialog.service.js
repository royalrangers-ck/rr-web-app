(function () {

    'use strict';

    angular
        .module('app')
        .service('AppModalService', AppModalService);

    AppModalService.$inject = ['$uibModal'];
    function AppModalService($uibModal) {

        this.profileMedalModal = profileMedalModal;
        this.approveCurrentUserModal = approveCurrentUserModal;

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
    }
})();
