(() => {

    'use strict';

    angular
        .module('app')
        .config(AdminSegment);

    function AdminSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/admin', 'admin').segment('admin', {
            templateUrl: 'admin/admin.html',
            controller: 'AdminController'
        });
    }
})();