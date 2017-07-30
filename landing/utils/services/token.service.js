(() => {

    'use strict';

    angular
        .module('app')
        .service('TokenService', TokenService);

    function TokenService($log, $localStorage) {

        this.get = get;
        this.save = save;
        this.clean = clean;

        ////

        function get() {
            return $localStorage.token;
        }

        function save(token) {
            $localStorage.token = token;
        }

        function clean() {
            delete $localStorage.token;
        }
    }
})();
