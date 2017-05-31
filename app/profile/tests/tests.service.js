(() => {

    'use strict';

    angular
        .module('app')
        .service('ProfileTestsService', ProfileTestsService);

    function ProfileTestsService(ProfileTestsFactory) {

        this.getUserTests = ProfileTestsFactory.getUserTests;
        this.getAllTests = ProfileTestsFactory.getAllTests;

    }

})();
