(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'LandingModalService'];
    function HomeController($log, LandingModalService) {
        const vm = this;

        vm.homeVideoModal = LandingModalService.homeVideoModal;

        activate();

        function activate() {
            $log.debug('Init HomeController ...');
        }
    }
})();