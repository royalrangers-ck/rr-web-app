(() => {

    'use strict';

    angular
        .module('admin')
        .config(TreeSegment);

    function TreeSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/tree', 'tree').segment('tree', {
            templateUrl: 'tree/tree.html',
            controller: 'TreeController',
            controllerAs: 'vm'
        });
    }
})();
