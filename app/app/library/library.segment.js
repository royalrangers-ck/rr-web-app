(() => {

    'use strict';

    angular
        .module('app')
        .config(LibrarySegment);

    LibrarySegment.$inject = ['$routeSegmentProvider'];
    function LibrarySegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/app/library', 'app.library').within('app').segment('library', {
            'default': true,
            templateUrl: 'app/library/library.html',
            controller: 'LibraryController'
        });
    }
})();