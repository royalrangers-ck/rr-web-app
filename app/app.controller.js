(() => {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$log', '$rootScope', '$scope', '$http', 'Menu', 'Endpoints', 'TokenScheduler'];
    function AppController($log, $rootScope, $scope, $http, Menu, Endpoints, TokenScheduler) {
        const vm = $rootScope;
        vm.sidebarMenu = Menu;
        vm.noImageAvailable = 'static/vendor/images/user.png';

        $scope.$on('KeepaliveResponse', function (event, data, status) {
            if (!status || status != 200) {
                window.location.href = '/';
            } else {
                console.log('event:', event);
                console.log('data:', data);
                console.log('status:', status);
            }
        });

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