/**
 * Home Controller
 * @namespace Controllers
 */
(() => {

    'use strict';

    angular
        .module('admin')
        .controller('HomeController', HomeController);

    function HomeController(Constants, UserService, ModalDialogService) {
        const vm = this;

        vm.defaultImage = Constants.DEFAULT_IMG_SRC;
        vm.currentUser = UserService.get();
        vm.uploadUserLogo = uploadUserLogo;

        activate();

        function activate() {
        }

        function uploadUserLogo(data) {
            ModalDialogService.uploadUserLogo(data);
        }
    }
})();
