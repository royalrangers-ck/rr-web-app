(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'ModalService'];
    function HomeController($log, ModalService) {
        const vm = this;

        vm.homeVideoModal = ModalService.homeVideoModal;

        activate();

        function activate() {
            $log.debug('Init HomeController ...');
        }
    }
})();