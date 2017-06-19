(() => {

    'use strict';

    angular
        .module('app')
        .factory('UserTestsFactory', UserTestsFactory);

    function UserTestsFactory($resource, Endpoints) {
        return $resource(Endpoints.ACHIEVEMENTS_USER_TEST, null);
    }

})();
