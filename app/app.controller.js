(() => {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['Menu', 'Ranks', 'Constants', 'Endpoints', 'TokenScheduler', 'UserService', '$timeout'];
    function AppController(Menu, Ranks, Constants, Endpoints, TokenScheduler, UserService, $timeout) {
        const vm = this;

        let currentUser = UserService.fetchFromStorage();
        UserService.save(currentUser);

        vm.ranksNames = Ranks;
        vm.sidebarMenu = Menu;
        vm.defaultImage = Constants.DEFAULT_IMG_SRC;
        vm.currentUser = UserService.get();
        vm.getUserRank = getUserRank;
        vm.isShow = isShow;

        activate();

        ////

        function activate() {
            TokenScheduler.refresh(Endpoints.TOKEN_REFRESH_INTERVAL);
            initMenu();
            hideLoadingModal();
        }
        
        function getUserRank(currentUser) {
            return vm.ranksNames[currentUser.userRank];
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

        function isShow(item) {
            if (!item.adminsOnly) {
                return true;
            }

            let allow = false;
            vm.currentUser.authorities.forEach(function (role) {
                if (role.name == Endpoints.ROLES.admin || role.name == Endpoints.ROLES.superAdmin) {
                    allow = true;
                }
            });

            return allow;
        }
    }

})();