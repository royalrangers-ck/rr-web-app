(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'AppModalService'];
    function HomeController($log, AppModalService) {
        const vm = this;


        vm.UploadUserLogo = AppModalService.UploadUserLogo;

        activate();


    }
})();
