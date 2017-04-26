(() => {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$log', '$rootScope', '$http', 'Menu', 'Endpoints', 'TokenScheduler'];
    function AppController($log, $rootScope, $http, Menu, Endpoints, TokenScheduler) {
        const vm = $rootScope;
        vm.sidebarMenu = Menu;
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
                    $log.debug('<== userInfoResponse:', res);
                }
            });
        }
    }

})();