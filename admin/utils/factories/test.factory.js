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
            }
        });
    }
})();