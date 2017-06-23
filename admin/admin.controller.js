(() => {

    'use strict';

    angular
        .module('admin')
        .controller('AppController', AppController);

    function AppController(Menu, Constants, TokenScheduler, UserService, $timeout) {
        const vm = this;

        let currentUser = UserService.fetchFromStorage();
        UserService.save(currentUser);

        vm.sidebarMenu = Menu;
        vm.defaultImage = Constants.DEFAULT_IMG_SRC;
        vm.currentUser = UserService.get();

        activate();

        ////

        function activate() {
            TokenScheduler.refresh(Constants.TOKEN_REFRESH_INTERVAL);
            initMenu();
            hideLoadingModal();
        }

        function initMenu() {
            $timeout(() => {
                $('#side-menu').metisMenu();
            });
        }

        function hideLoadingModal() {
            $timeout(() => {
                $('#loading-modal').modal('hide');
            }, 1000);
        }
    }

})();
