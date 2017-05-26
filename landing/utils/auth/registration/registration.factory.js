(() => {

    'use strict';

    angular
        .module('app')
        .factory('Registration', Registration);

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
            'region': {
                method: 'GET',
                url: Endpoints.REGION,
                params: {countryId: '@countryId'},
                isArray: false
            },
            'city': {
                method: 'GET',
                url: Endpoints.CITY,
                params: {regionId: '@regionId'},
                isArray: false
            },
            'platoon': {
                method: 'GET',
                url: Endpoints.PLATOON,
                params: {cityId: '@cityId'},
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