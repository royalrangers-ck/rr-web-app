(() => {

    'use strict';

    angular
        .module('app')
        .factory('Login', Login);

    Login.$inject = ['$resource', '$log', 'Endpoints'];
    function Login($resource, Endpoints) {
        return $resource(Endpoints.AUTH, null, {
            'login': {
                method: 'POST'
            }
        })
    }
})();
