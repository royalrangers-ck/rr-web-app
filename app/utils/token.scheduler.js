(() => {

    'use strict';

    angular
        .module('app')
        .service('TokenSheduler', TokenSheduler);

    TokenSheduler.$inject = ['$log', '$interval', '$http', 'TokenService'];
    function TokenSheduler($log, $interval, $http, TokenService) {

        $interval(function () {
            $http.get('/api/refresh').then(function (res) {
                TokenService.save(res.data.data.token)
            }, function (err) {
                $log.debug(err)
            });
        },1800000);

        $log.debug('Init TokenSheduler ...');

    }
})();
