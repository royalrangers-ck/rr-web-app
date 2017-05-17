(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'Ranks', 'Constants', 'UserService', 'AppModalService'];
    function HomeController($log, Ranks, Constants, UserService, AppModalService) {
        const vm = this;

        vm.ranksNames = Ranks;
        vm.defaultImage = Constants.DEFAULT_IMG_SRC;
        vm.currentUser = UserService.get();
        vm.uploadUserLogo = uploadUserLogo;
        vm.getUserRank = getUserRank;

        activate();

        function uploadUserLogo(data) {
            AppModalService.uploadUserLogo(data);
        }

        function activate() {
            $log.debug('Init HomeController ...');
        }

        function getUserRank(currentUser) {
            return vm.ranksNames[currentUser.userRank];
        }
    }

})();
