(() => {

    'use strict';

    angular
        .module('app')
        .config(ProgressSegment);

    function ProgressSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/progress', 'progress').segment('progress', {
            templateUrl: 'progress/progress.html',
            controller: 'ProgressController'
        });
    }
})();