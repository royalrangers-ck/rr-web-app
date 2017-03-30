(() => {

    'use strict';

    angular
        .module('app')
        .service('TokenScheduler', TokenScheduler);

    TokenScheduler.$inject = ['$interval', '$http', 'TokenService'];
    function TokenScheduler($interval, $http, TokenService) {

        this.refresh = refresh;

        ////

        function refresh(interval) {
            $interval(function () {
                $http.get('/api/refresh').then(function (res) {
                    TokenService.save(res.data.data.token)
                });
            }, interval);
        }
    }
})();
