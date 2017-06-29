(() => {

    'use strict';

    angular
        .module('app')
        .factory('ProfileTestsFactory', ProfileTestsFactory);

    function ProfileTestsFactory($resource, Endpoints) {
        return $resource(Endpoints.ACHIEVEMENTS_TEST, null,
            {
                'getUserTests': {
                    method: 'GET',
                    url: Endpoints.ACHIEVEMENTS_USER_TEST
                },

                'getTests': {
                    method: 'GET',
                    url: Endpoints.ACHIEVEMENTS_TEST
                },

                'createTest': {
                    method: 'POST',
                    url: Endpoints.ACHIEVEMENTS_TEST
                }
            }
        );
    }

})();
