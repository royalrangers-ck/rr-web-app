(() => {

    'use strict';

    angular
        .module('app')
        .factory('ProfileTestsFactory', ProfileTestsFactory);

    ProfileTestsFactory.$inject = ['$resource', 'Endpoints'];
    function ProfileTestsFactory($resource, Endpoints) {
        return $resource(Endpoints.ACHIEVEMENTS_TEST, null,
        {
            'getUserTests': {
                method: 'GET',
                url: Endpoints.ACHIEVEMENTS_USER_TEST
            },
            'getAllTests': {
                method: 'GET',
                url: Endpoints.ACHIEVEMENTS_TEST
            }
        }
    );
}

})();