(() => {

    'use strict';

    angular
        .module('app')
        .service('ProfileTestsService', ProfileTestsService);

    ProfileTestsService.$inject = ['$http', 'ProfileTestsFactory'];
    function ProfileTestsService($http, ProfileTestsFactory) {

        this.getTests = ProfileTestsFactory.get;

    }

})();
