(() => {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$log', '$rootScope', '$http', 'Menu', 'Endpoints', 'TokenScheduler', '$timeout'];
    function AppController($log, $rootScope, $http, Menu, Endpoints, TokenScheduler, $timeout) {
        const vm = $rootScope;
        vm.sidebarMenu = {};
        vm.noImageAvailable = 'static/vendor/images/user.png';

        activate();

        ////

        function activate() {
            TokenScheduler.refresh(Endpoints.TOKEN_REFRESH_INTERVAL);
            getUserInfo().then(() => {
                setSidebarMenu();
            }); 
        }

        function getUserInfo() {
            return $http.get(Endpoints.USER).then((res) => {
                if (res.data.success) {
                    vm.currentUser = res.data.data;
                    vm.avatarUrl = res.data.data.avatarUrl;
                    $log.debug('<== userInfoResponse:', res);
                }
            });
        }

        function setSidebarMenu() {
            vm.sidebarMenu = filterMenu(Menu, vm.currentUser.authorities);
            $timeout(() => {
                $('#side-menu').metisMenu('dispose');
                $('#side-menu').metisMenu();
            }, 500);
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