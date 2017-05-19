(() => {

    'use strict';

    angular
        .module('app')
        .factory('ProfileTestsFactory', ProfileTestsFactory);

    ProfileTestsFactory.$inject = ['$resource', 'Endpoints'];
    function ProfileTestsFactory($resource, Endpoints) {
        return $resource(Endpoints.ACHIEVEMENTS_USER_TEST, null,
        {
            'get': {method: 'GET'},
        }
    );
}

})();