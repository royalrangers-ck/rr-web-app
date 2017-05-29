(() => {

    'use strict';

    angular
        .module('app')
        .config(ProgressSegment);

    ProgressSegment.$inject = ['$routeSegmentProvider'];
    function ProgressSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/progress', 'progress').segment('progress', {
            'default': true,
            templateUrl: 'progress/progress.html',
            controller: 'ProgressController'
        });
    }
})();