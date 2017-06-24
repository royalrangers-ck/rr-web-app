(() => {

    'use strict';

    angular
        .module('app')
        .service('ProfileTestsService', ProfileTestsService);

    function ProfileTestsService(ProfileTestsFactory, UserTestsFactory) {

        this.getUserTests = UserTestsFactory.get;
        this.getAllTests = ProfileTestsFactory.getAllTests;

    }

})();
