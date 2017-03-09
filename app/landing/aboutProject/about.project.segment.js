(() => {

    'use strict';

    angular
        .module('app')
        .config(AboutProjectSegment);

    AboutProjectSegment.$inject = ['$routeSegmentProvider'];
    function AboutProjectSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/aboutProject', 'landing.aboutProject').within('landing').segment('aboutProject', {
            templateUrl: 'landing/aboutProject/about.project.html',
            controller: 'AboutProjectController'
        });
    }
})();