(() => {

    'use strict';

    angular
        .module('app')
        .factory('Registration', Registration);

    Registration.$inject = ['$resource', '$log', 'Endpoints'];
    function Registration($resource, $log, Endpoints) {
        return $resource(Endpoints.API.REGISTRATION + '/:id', null, {
            'save': {
                method:'POST'
            }
        })
    }
})();