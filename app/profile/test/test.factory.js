(() => {

    'use strict';

    angular
        .module('app')
        .factory('ProfileTestFactory', ProfileTestFactory);

    function ProfileTestFactory($resource, Endpoints) {
        return $resource(`${Endpoints.ACHIEVEMENTS_TEST}/:id`, {id: '@id'});
    }

})();
