(() => {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$log', '$rootScope', '$http', 'Menu', 'Endpoints', 'TokenScheduler'];
    function AppController($log, $rootScope, $http, Menu, Endpoints, TokenScheduler) {
        const vm = $rootScope;
        vm.sidebarMenu = {};
        vm.noImageAvailable = 'static/vendor/images/user.png';

        activate();

        ////

        function activate() {
            TokenScheduler.refresh(Endpoints.TOKEN_REFRESH_INTERVAL);
            getUserInfo();
            setSidebarMenu();
        }

        function getUserInfo() {
            $http.get(Endpoints.USER).then((res) => {
                if (res.data.success) {
                    vm.currentUser = res.data.data;
                    vm.avatarUrl = vm.currentUser.avatarUrl;
                    $log.debug('<== userInfoResponse:', res);
                }
            });
        }

        function setSidebarMenu() {
            vm.sidebarMenu = filterMenu(Menu, Endpoints.ROLES.admin);
        }

        function filterMenu(menu, role) {
            return menu.filter((item) => {
                if (Array.isArray(item.submenu)) {
                    item.submenu = filterMenu(item.submenu, role);
                }
                if (item.adminsOnly) {
                    if (role !== Endpoints.ROLES.admin &&
                        role !== Endpoints.ROLES.superAdmin) {
                        return false;
                    }
                }
                return true;
            });
        }
    }

})();