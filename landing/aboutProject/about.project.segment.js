(() => {

    'use strict';

    angular
        .module('app')
        .config(AboutProjectSegment);

    AboutProjectSegment.$inject = ['$routeSegmentProvider'];
    function AboutProjectSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/aboutProject', 'aboutProject').segment('aboutProject', {
            templateUrl: 'aboutProject/about.project.html',
            controller: 'AboutProjectController'
        });
    }
})();