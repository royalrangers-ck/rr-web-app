(() => {

    'use strict';

    angular
        .module('app')
        .factory('ConfirmUsers', ConfirmUsers);

    ConfirmUsers.$inject = ['$resource', 'Endpoints'];

    //This function return $resource with all needed request
    //to get, approve and decline unapproved users
    function ConfirmUsers($resource, Endpoints) {
        return $resource(null , null, {
            'getUsers': {
                method: 'GET',
                url: `${Endpoints.USER}/approve/:platoonId`
            },
            'approveUser': {
                method: 'POST',
                url: `${Endpoints.USER}/approve`
            },
            'declineUser': {
                method: 'POST',
                url: `${Endpoints.USER}/decline`
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