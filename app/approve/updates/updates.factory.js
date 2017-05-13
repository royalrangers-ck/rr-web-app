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
                url: `${Endpoints.USER}/approve/:platoonId`
            },
            'allPlatoons': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/platoons`,
                isArray: false
            }
        });
    }
})();