(() => {

    'use strict';

    angular
        .module('app')
        .factory('EditUserModal', EditUserModal);

    EditUserModal.$inject = ['$resource', 'Endpoints'];
    function EditUserModal($resource, Endpoints) {
        return $resource(Endpoints.USER , null, {
            'updateUser': {
                method: 'PUT'
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