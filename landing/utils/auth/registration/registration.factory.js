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
                url: Endpoints.CITIES,
                params: {countryId: '@countryId'},
                isArray: false
            },
            'group': {
                method: 'GET',
                url: Endpoints.GROUPS,
                params: {cityId: '@cityId'},
                isArray: false
            },
            'platoon': {
                method: 'GET',
                url: Endpoints.PLATOONS,
                params: {groupId: '@groupId'},
                isArray: false
            },
            'section': {
                method: 'GET',
                url: Endpoints.SECTIONS,
                params: {platoonId: '@platoonId'},
                isArray: false
            }
        })
    }
})();