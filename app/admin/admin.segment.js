(() => {

    'use strict';

    angular
        .module('app')
        .config(AdminSegment);

    AdminSegment.$inject = ['$routeSegmentProvider'];
    function AdminSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/admin', 'admin').segment('admin', {
            'default': true,
            templateUrl: 'admin/admin.html',
            controller: 'AdminController'
        });
    }
})();