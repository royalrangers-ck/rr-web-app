(() => {

    'use strict';

    angular
        .module('admin')
        .factory('TestFactory', TestFactory);

    function TestFactory($resource, Endpoints) {
        return $resource(Endpoints.TEST, null, {
            "getAll": {
                method: 'GET',
                url: `${Endpoints.TEST}/all`,
                isArray: false
            },
            "getById": {
                method: 'GET',
                url: `${Endpoints.TEST}/:id`
            },
            "updateTest": {
                method: 'PUT',
                url: `${Endpoints.TEST}/:id`
            }
        });
    }
})();