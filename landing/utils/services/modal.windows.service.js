(function () {

    'use strict';

    angular
        .module('app')
        .service('ModalWindowService', ModalWindowService);

    function ModalWindowService($uibModal) {

        this.homeModalVideo = homeModalVideo;

        ////

        function homeModalVideo() {
            return $uibModal.open({
                animation: true,
                templateUrl: 'home/modal.video/modal.video.html',
                controller: 'ModalVideoController',
                controllerAs: 'vm',
                size: 'lg'
            }).result // result (promise) - Is resolved when a modal is closed and rejected when a modal is dismissed.
                .then(function () { /* Resolved */  },
                      function () { /* Dismissed */ });
        }
    }
})();
