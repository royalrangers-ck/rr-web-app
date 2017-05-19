(() => {

    'use strict';

    angular
        .module('app')
        .service('ProfileTestsService', ProfileTestsService);

    ProfileTestsService.$inject = ['$http', 'TestsFactory'];
    function ProfileTestsService($http, TestsFactory) {

        this.getTests = TestsFactory.get;

    }

})();
