(() => {

    'use strict';

    angular
        .module('app')
        .factory('ApproveRegistrations', ApproveRegistrations);

    ApproveRegistrations.$inject = ['$resource', 'Endpoints'];
    function ApproveRegistrations($resource, Endpoints) {
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