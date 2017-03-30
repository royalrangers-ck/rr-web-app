(() => {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$log', '$rootScope', '$http', 'Menu', 'Endpoints', 'TokenScheduler'];
    function AppController($log, $rootScope, $http, Menu, Endpoints, TokenScheduler) {
        const vm = $rootScope;
        vm.sidebarMenu = Menu;

        activate();

        ////

        function activate() {
            TokenScheduler.refresh(Endpoints.TOKEN_REFRESH_INTERVAL);
            getUserInfo();
        }

        function getUserInfo() {
            $http.get('/api/user').then((res) => {
                if (res.data.success) {
                    vm.currentUser = res.data.data;
                    $log.debug('<== userInfoResponse:', res);
                }
            });
        }
    }
})();