(() => {

    'use strict';

    angular
        .module('admin')
        .factory('TaskFactory', TaskFactory);

    function TaskFactory($resource, Endpoints) {
        return $resource(Endpoints.TASK, null);
    }
})();