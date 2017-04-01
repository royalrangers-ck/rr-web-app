(function () {

    'use strict';

    angular
        .module('app')
        .service('AppModalService', AppModalService);

    AppModalService.$inject = ['$uibModal'];
    function AppModalService($uibModal) {

        this.profileMedalModal = profileMedalModal;

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
    }
})();
