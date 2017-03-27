(() => {

    'use strict';

    angular
        .module('app')
        .factory('ConfirmUsers', ConfirmUsers);

    ConfirmUsers.$inject = ['$resource', '$log', 'Endpoints', 'TokenService'];
    function ConfirmUsers($resource, $log, Endpoints, TokenService) {
        //this $resource can be used to get unapproved users list
        //and accept or decline them
        //TODO: delete 'Authorization' in headers, if problem with authorization will solved
        return $resource(Endpoints.USER + '/:userId', null, {
            'getUsers': {
                method: 'GET',
                url: `${Endpoints.UNAPPROVED_USERS_LIST}/:platoonId`,
                headers: { 'Authorization': TokenService.get() }
            },
            'approveUser': {
                method: 'PUT',
                headers: { 'Authorization': TokenService.get() }
            },
            'declineUser': {
                method: 'DELETE',
                headers: { 'Authorization': TokenService.get() }
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