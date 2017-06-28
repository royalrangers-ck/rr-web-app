/**
 * Top Bar Controller
 * @namespace Controllers
 */
(() => {

    'use strict';

    angular
        .module('admin')
        .controller('TopBarController', TopBarController);

    function TopBarController($window, TokenService, ModalDialogService) {
        const vm = this;

        vm.logout = logout;
        vm.editUser = editUser;

        activate();

        ////

        function activate() {
        }

        function logout() {
            TokenService.clean();
            $window.location.pathname = '/';
        }

        function editUser() {
            ModalDialogService.editUserModal();
        }
    }
})();
