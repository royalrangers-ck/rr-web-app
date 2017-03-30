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