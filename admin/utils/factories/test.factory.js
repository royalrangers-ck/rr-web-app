(() => {

    'use strict';

    angular
        .module('admin')
        .factory('TestFactory', TestFactory);

    function TestFactory($resource, Endpoints) {
        return $resource(Endpoints.TEST, null);
    }
})();