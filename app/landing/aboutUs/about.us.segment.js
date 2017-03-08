(() => {

    'use strict';

    angular
        .module('app')
        .config(AboutUsSegment);

    AboutUsSegment.$inject = ['$routeSegmentProvider'];
    function AboutUsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/aboutUs', 'landing.aboutUs').within('landing').segment('aboutUs', {
            templateUrl: 'landing/aboutUs/about.us.html',
            controller: 'AboutUsController'
        });
    }
})();