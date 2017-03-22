(function () {

    'use strict';

    angular
        .module('app')
        .service('ModalService', ModalService);

    ModalService.$inject = ['$uibModal'];
    function ModalService($uibModal) {

        this.homeVideoModal = homeVideoModal;

        function homeVideoModal() {
            return $uibModal.open({
                animation: true,
                templateUrl: 'home/videoModal/videoModal.html',
                controller: 'VideoModalController',
                controllerAs: 'vm',
            });
        }
    }
})();