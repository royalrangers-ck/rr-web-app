(() => {

    'use strict';

    angular
        .module('app')
        .service('TokenService', TokenService);

    function TokenService($localStorage) {

        this.get = get;
        this.save = save;
        this.clean = clean;

        ////

        function get() {
            return $localStorage.token;
        }

        function save(token) {
            return $localStorage.token = token;
        }

        function clean() {
            $localStorage.token = null;
        }
    }
})();
