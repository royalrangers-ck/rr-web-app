(() => {

    'use strict';

    angular
        .module('app')
        .config(LibrarySegment);

    function LibrarySegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/library', 'library').segment('library', {
            'default': true,
            templateUrl: 'library/library.html',
            controller: 'LibraryController'
        });
    }
})();