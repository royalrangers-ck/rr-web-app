(function () {

    'use strict';

    angular
        .module('app')
        .service('ModalWindowService', ModalWindowService);

    ModalWindowService.$inject = ['$uibModal'];
    function ModalWindowService($uibModal) {

        this.homeModalVideo = homeModalVideo;

        function homeModalVideo() {
            return $uibModal.open({
                animation: true,
                templateUrl: 'home/modal.video/modal.video.html',
                controller: 'VideoModalController',
                controllerAs: 'vm',
                size: 'lg'
            });
        }
    }
})();
