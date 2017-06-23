(() => {

    'use strict';

    angular
        .module('admin')
        .service('TokenScheduler', TokenScheduler);

    function TokenScheduler($interval, $http, TokenService) {

        this.refresh = refresh;

        ////

        function refresh(interval) {
            $interval(function () {
                $http.get('/api/refresh').then(function (res) {
                    TokenService.save(res.data.data.token)
                });
            }, interval || 1000);
        }
    }
})();
