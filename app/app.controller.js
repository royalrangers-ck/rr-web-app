(() => {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$log', '$rootScope', '$http', 'Menu'];
    function AppController($log, $rootScope, $http, Menu) {
        const vm = $rootScope;
        vm.sidebarMenu = Menu;

        let req = {
            method: 'GET',
            url: '/api/user',
            headers: {
                'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWFpbDFAbWFpbC50ZXN0IiwiYXVkaWVuY2UiOiJ3ZWIiLCJjcmVhdGVkIjoxNDkwNjQ1MjkyOTc4LCJleHAiOjE0OTEyNTAwOTJ9.Kd3F9HHVo38UAO7D0LgLWlCvGIetEA0LTxJe8WpfiVUguMZIY3NjYpU5soKbIkSrRe6wGZqA9ZRy8avQp3eDUQ'
            }
        };

        $http(req).then((res) => {

            $log.debug('<== userInfoResponse:', res);

            if (res.data.success) {
                vm.userInfo = res.data.data;
            }
        });
    }
})();