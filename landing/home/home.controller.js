(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'LandingModalService'];
    function HomeController($log, LandingModalService) {
        const vm = this;

        vm.homeVideoModal = LandingModalService.homeVideoModal;
        vm.submit = submit;

        activate();

        function activate() {
            $log.debug('Init HomeController ...');
        }

        function submit() {
            console.log(vm.email)
        }
    }
})();