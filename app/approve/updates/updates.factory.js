(() => {

    'use strict';

    angular
        .module('app')
        .factory('ApproveUpdates', ApproveUpdates);

    ApproveUpdates.$inject = ['$resource', 'Endpoints'];
    function ApproveUpdates($resource, Endpoints) {
        return $resource(Endpoints.USER , null, {
            'getUsers': {
                method: 'GET',
                url: `${Endpoints.USER}/approve/update/:platoonId`
            }
        });
    }
})();