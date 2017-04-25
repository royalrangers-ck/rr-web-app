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
        }

        function getUserInfo() {
            $http.get(Endpoints.USER).then((res) => {
                if (res.data.success) {
                    vm.currentUser = res.data.data;
                    vm.avatarUrl = res.data.data.avatarUrl;
                    setSidebarMenu();
                    $log.debug('<== userInfoResponse:', res);
                }
            });
        }

        function setSidebarMenu() {
            vm.sidebarMenu = filterMenu(Menu, vm.currentUser.authorities);
            $log.debug('<== init sidebarMenu:', vm.sidebarMenu);
        }

        function filterMenu(menu, roles) {
            return menu.filter((item) => {
                if (Array.isArray(item.submenu)) {
                    item.submenu = filterMenu(item.submenu, roles);
                }
                if (item.adminsOnly) {
                    for (let role in roles) {
                        if (roles[role].name === Endpoints.ROLES.admin ||
                            roles[role].name === Endpoints.ROLES.superAdmin) {
                            return true;
                        }
                    }
                    return false;
                }
                return true;
            });
        }
    }

})();