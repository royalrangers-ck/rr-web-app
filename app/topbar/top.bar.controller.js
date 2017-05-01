(() => {

    'use strict';

    angular
        .module('app')
        .controller('TopBarController', TopBarController);

    TopBarController.$inject = ['$log', '$window', 'TokenService', 'AppModalService'];
    function TopBarController($log, $window, TokenService, AppModalService) {
        const vm = this;

        vm.logout = logout;
        vm.editUser = editUser;

        activate();


        ////

        function logout() {
            TokenService.clean();
            $window.location.pathname = '/';
        }

        function editUser() {
            AppModalService.editUserModal();
        }

        function activate() {
            $log.debug('Init TopBarController...');
        }
    }
})();
