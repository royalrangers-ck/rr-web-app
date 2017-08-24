(() => {

    'use strict';

    angular
        .module('admin')
        .config(EditSegment);

    function EditSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/edit', 'edit')
            .segment('edit', {
                templateUrl: 'edit/edit.html',
                controller: 'EditController'
            });
    }
})();
