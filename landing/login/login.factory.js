(() => {

    'use strict';

    angular
        .module('app')
        .factory('Login', Login);

    Login.$inject = ['$resource', '$log', 'Endpoints'];
    function Login($resource, Endpoints) {
        return $resource(Endpoints.API.AUTH, null, {
            'send': {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    email: vm.data.email,
                    password: vm.data.password
                },
                isArray: false
            }
        })
    }
})();
