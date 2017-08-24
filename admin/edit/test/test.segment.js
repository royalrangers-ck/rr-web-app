(() => {

    'use strict';

    angular
        .module('admin')
        .config(EditTestSegment);

    function EditTestSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/edit/test/:id', 'edit.test')
            .within('edit')
            .segment('test', {
                templateUrl: 'edit/test/test.html',
                controller: 'EditTestController',
                controllerAs: 'vm',
                dependencies: ['id'],
                resolve: {
                    testResolve: function (TestService, $routeParams) {
                        return TestService.getById({id: $routeParams.id});
                    },
                    testColors: function (TestService) {
                        return TestService.getTestColors();
                    }
                }

            });
    }
})();
