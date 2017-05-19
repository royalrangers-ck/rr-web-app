(() => {

    'use strict';

    angular
        .module('app')
        .factory('ApproveUserModal', ApproveUserModal);

    ApproveUserModal.$inject = ['$resource', 'Endpoints'];
    function ApproveUserModal($resource, Endpoints) {
        return $resource(Endpoints.USER , null, {
            'approveUser': {
                method: 'POST',
                url: `${Endpoints.USER}/approve`
            },
            'declineUser': {
                method: 'POST',
                url: `${Endpoints.USER}/reject`
            },
            'updateUser': {
                method: 'PUT',
                url: `${Endpoints.USER}/:userId`
            },
            'countries': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/countries`,
                isArray: false
            },
            'city': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/city`,
                params: {countryId: '@countryId'},
                isArray: false
            },
            'group': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/group`,
                params: {cityId: '@cityId'},
                isArray: false
            },
            'platoon': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/platoon`,
                params: {groupId: '@groupId'},
                isArray: false
            },
            'section': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/section`,
                params: {platoonId: '@platoonId'},
                isArray: false
            },
            'rank': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/ranks`,
                isArray: false
            }
        });
    }
})();