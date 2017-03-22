(function () {

    'use strict';

    angular
        .module('app')
        .service('LandingModalService', LandingModalService);

    LandingModalService.$inject = ['$uibModal'];
    function LandingModalService($uibModal) {

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