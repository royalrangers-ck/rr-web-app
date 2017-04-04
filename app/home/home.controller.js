(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['AppModalService'];
    function HomeController(AppModalService) {
        const vm = this;

        vm.UploadUserLogo = AppModalService.UploadUserLogo;

    }
})();
