(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'Constants', 'UserService', 'AppModalService'];
    function HomeController($log, Constants, UserService, AppModalService) {
        const vm = this;

        vm.defaultImage = Constants.DEFAULT_IMG_SRC;
        vm.currentUser = UserService.get();
        vm.uploadUserLogo = AppModalService.uploadUserLogo;

        activate();

        function activate() {
            $log.debug('Init HomeController ...');
        }
    }

})();
