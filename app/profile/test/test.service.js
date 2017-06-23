(() => {

    'use strict';

    angular
        .module('app')
        .service('ProfileTestService', ProfileTestService);

    function ProfileTestService(UserTestsFactory, ProfileTestFactory) {

        this.getTest = ProfileTestFactory.get;
        this.startTest = UserTestsFactory.save;
        this.getUserTests = UserTestsFactory.get;

    }

})();
