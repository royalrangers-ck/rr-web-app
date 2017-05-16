(() => {

    'use strict';

    angular
        .module('app')
        .service('ProfileTestsService', ProfileTestsService);

    ProfileTestsService.$inject = ['ProfileTestsFactory'];
    function ProfileTestsService(ProfileTestsFactory) {

        this.getAllTests = ProfileTestsFactory.getAllTests
    }
})();
