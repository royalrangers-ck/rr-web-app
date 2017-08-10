(() => {

    'use strict';

    angular
        .module('admin')
        .config(CreateTestSegment);

    function CreateTestSegment($routeSegmentProvider) {
        $routeSegmentProvider
            .when('/create/test', 'create.test')
            .within('create')
            .segment('test', {
                templateUrl: 'create/test/test.html',
                controller: 'CreateTestController',
                controllerAs: 'vm',
                resolve: {
                    testsPromise: function (TestService) {
                        return TestService.getAllTests().$promise;
                    }
                }
            });
    }
})();