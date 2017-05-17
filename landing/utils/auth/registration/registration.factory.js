(() => {

    'use strict';

    angular
        .module('app')
        .factory('Registration', Registration);

    Registration.$inject = ['$resource', 'Endpoints'];
    function Registration($resource, Endpoints) {
        return $resource(Endpoints.REGISTRATION + '/:id', null, {
            'register': {method: 'POST'},
            'confirm': {
                method: 'GET',
                url: Endpoints.REGISTRATION + '/confirm',
                params: {token: '@token'}
            },
            'countries': {
                method: 'GET',
                url: Endpoints.COUNTRIES,
                isArray: false
            },
            'city': {
                method: 'GET',
                url: Endpoints.CITY,
                params: {countryId: '@countryId'},
                isArray: false
            },
            'group': {
                method: 'GET',
                url: Endpoints.GROUP,
                params: {cityId: '@cityId'},
                isArray: false
            },
            'platoon': {
                method: 'GET',
                url: Endpoints.PLATOON,
                params: {groupId: '@groupId'},
                isArray: false
            },
            'section': {
                method: 'GET',
                url: Endpoints.SECTION,
                params: {platoonId: '@platoonId'},
                isArray: false
            },
            'ranks': {
                method: 'GET',
                url: Endpoints.RANKS,
                isArray: false
            }
        })
    }
})();