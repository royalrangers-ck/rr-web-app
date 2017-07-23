(() => {

    'use strict';

    angular
        .module('admin')
        .factory('CreatePlacesFactory', CreatePlacesFactory);

    function CreatePlacesFactory($resource, Endpoints) {

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
            }
        });
    }
})();