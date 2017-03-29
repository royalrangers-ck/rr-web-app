(() => {

    'use strict';

    angular
        .module('app')
        .controller('TopBarController', TopBarController);

    TopBarController.$inject = ['$log', '$window', 'TokenService'];
    function TopBarController($log, $window, TokenService) {
        const vm = this;

        vm.logout = logout;

        activate();


        function activate() {
            $log.debug('Init TopBarController ...');
        }

        function logout() {
            TokenService.clean();
            $window.location.pathname = '/';
        }
    }
})();




