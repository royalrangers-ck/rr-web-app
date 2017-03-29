(() => {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$log', '$rootScope', '$http', 'Menu', 'TokenSheduler'];
    function AppController($log, $rootScope, $http, Menu, TokenSheduler) {
        const vm = $rootScope;
        vm.sidebarMenu = Menu;
        TokenSheduler;

        let req = {
            method: 'GET',
            url: '/api/user'
        };

        $http(req).then((res) => {
            $log.debug('<== userInfoResponse:', res);

            if (res.data.success) {
                vm.currentUser = res.data.data;
            }
        });
    }
})();