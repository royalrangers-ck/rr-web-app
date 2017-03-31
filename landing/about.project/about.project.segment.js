(() => {

    'use strict';

    angular
        .module('app')
        .config(AboutProjectSegment);

    AboutProjectSegment.$inject = ['$routeSegmentProvider'];
    function AboutProjectSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/aboutProject', 'aboutProject').segment('aboutProject', {
            templateUrl: 'about.project/about.project.html',
            controller: 'AboutProjectController'
        });
    }
})();