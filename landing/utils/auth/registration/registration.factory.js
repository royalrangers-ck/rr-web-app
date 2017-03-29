(() => {

    'use strict';

    angular
        .module('app')
        .factory('Registration', Registration);

    Registration.$inject = ['$resource', '$log', 'Endpoints'];
    function Registration($resource, $log, Endpoints) {
        return $resource(Endpoints.REGISTRATION + '/:id', null, {
            'register': {method: 'POST'},
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
        })
    }
})();