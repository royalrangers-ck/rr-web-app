(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'ModalWindowService'];
    function HomeController($log, ModalWindowService) {
        const vm = this;

        vm.homeModalVideo = ModalWindowService.homeModalVideo;

        activate();

        function activate() {
            $log.debug('Init HomeController ...');
        }
    }
})();