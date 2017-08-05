(() => {

    'use strict';

    angular
        .module('admin')
        .factory('PublicInfoFactory', PublicInfoFactory);
    
    function PublicInfoFactory($resource, Endpoints) {

        return $resource(Endpoints.PUBLIC, null, {
            'countries': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/countries`,
                isArray: false
            },
            'region': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/region`,
                params: {cityId: '@countryId'},
                isArray: false
            },
            'regions': {
                method: 'GET',
                url: Endpoints.REGIONS,
                isArray: false
            },
            'city': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/city`,
                params: {countryId: '@regionId'},
                isArray: false
            },
            'cities': {
                method: 'GET',
                url: Endpoints.CITIES,
                isArray: false
            },
            'platoon': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/platoon`,
                params: {groupId: '@cityId'},
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
            },
            'tests': {

            }
        });
    }
})();