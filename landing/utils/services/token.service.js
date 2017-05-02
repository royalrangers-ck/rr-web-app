(() => {

    'use strict';

    angular
        .module('app')
        .service('TokenService', TokenService);

    TokenService.$inject = ['$log', '$localStorage'];
    function TokenService($log, $localStorage) {

        this.get = get;
        this.save = save;

        ////

        function get() {
            return $localStorage.token;
        }

        function save(token) {
            window.localStorage.setItem('token', token);
            return $localStorage.token = token;
        }
    }
})();
