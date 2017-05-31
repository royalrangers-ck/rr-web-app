(() => {

    'use strict';

    angular
        .module('app')
        .service('ProfileTestService', ProfileTestService);

    function ProfileTestService($http, ProfileTestFactory) {

        this.getTest = ProfileTestFactory.get;

    }

})();
