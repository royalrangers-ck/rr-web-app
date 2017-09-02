(() => {

    'use strict';

    angular
        .module('admin')
        .factory('PlaceFactory', PlaceFactory);

    function PlaceFactory($resource, Endpoints) {

        return $resource(null, null, {
            'country': {
                method: 'POST',
                url: Endpoints.ADMIN_COUNTRY
            },
            'region': {
                method: 'POST',
                url: Endpoints.ADMIN_REGION
            },
            'city': {
                method: 'POST',
                url: Endpoints.ADMIN_CITY
            },
            'platoon': {
                method: 'POST',
                url: Endpoints.PLATOON_ENDPOINTS
            },
            'section': {
                method: 'POST',
                url: Endpoints.ADMIN_SECTION
            }
        });
    }
})();