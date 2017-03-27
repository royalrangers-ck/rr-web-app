(() => {

    'use strict';

    angular
        .module('app')
        .service('TokenService', TokenService);

    TokenService.$inject = ['$log', '$localStorage'];
    function TokenService($log, $localStorage) {

        this.get = get;
        this.save = save;

        /*Logout*/
        this.clean = clean;

        ////

        function get() {
            $log.debug(`<== Get token: ${$localStorage.token}`);
            return $localStorage.token;
        }

        function save(token) {
            $log.debug(`==> Save token: ${token}`);
            return $localStorage.token = token;
        }

        function clean() {
            $localStorage.token = null;
        }
    }
})();
