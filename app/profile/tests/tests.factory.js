(() => {

    'use strict';

    angular
        .module('app')
        .factory('ProfileTestsFactory', ProfileTestsFactory);

    function ProfileTestsFactory($resource, Endpoints) {
        return $resource(Endpoints.ACHIEVEMENTS_TEST, null,
            {
                'getAllTests': {
                    method: 'GET',
                    url: Endpoints.ACHIEVEMENTS_TEST
                }
            }
        );
    }

})();
