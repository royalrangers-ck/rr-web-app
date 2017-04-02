(() => {

    'use strict';

    angular
        .module('app')
        .factory('ConfirmUsers', ConfirmUsers);

    ConfirmUsers.$inject = ['$resource', 'Endpoints'];
    function ConfirmUsers($resource, Endpoints) {
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