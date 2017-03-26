(() => {

    'use strict';

    angular
        .module('app')
        .controller('TopBarController', TopBarController);

    TopBarController.$inject = ['$log', 'TokenService'];
    function TopBarController($log, TokenService) {
        const vm = this;

        /*Logout*/
        vm.clean = TokenService.clean;

        activate();


        function activate() {
            $log.debug('Init TopBarController ...');
        }

    }
})();





