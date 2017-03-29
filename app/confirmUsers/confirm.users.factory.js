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
                url: Endpoints.APPROVE_USERS + '/:platoonId'
            },
            'approveUser': {
                method: 'POST',
                url: Endpoints.APPROVE_USERS
            },
            'declineUser': {
                method: 'POST',
                url: Endpoints.DECLINE_USERS
            },
            'updateUser': {
                method: 'PUT',
                url: Endpoints.USER + '/:userId'
            },
            'countries': {
                method: 'GET',
                url: `${Endpoints.REGISTRATION}/countries`,
                isArray: false
            },
            'city': {
                method: 'GET',
                url: `${Endpoints.REGISTRATION}/city`,
                params: {countryId: '@countryId'},
                isArray: false
            },
            'group': {
                method: 'GET',
                url: `${Endpoints.REGISTRATION}/group`,
                params: {cityId: '@cityId'},
                isArray: false
            },
            'platoon': {
                method: 'GET',
                url: `${Endpoints.REGISTRATION}/platoon`,
                params: {groupId: '@groupId'},
                isArray: false
            },
            'section': {
                method: 'GET',
                url: `${Endpoints.REGISTRATION}/section`,
                params: {platoonId: '@platoonId'},
                isArray: false
            }
        });
    }
})();