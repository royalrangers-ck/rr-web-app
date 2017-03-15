(() => {

    'use strict';

    angular
        .module('app')
        .config(AboutUsSegment);

    AboutUsSegment.$inject = ['$routeSegmentProvider'];
    function AboutUsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/aboutUs', 'aboutUs').segment('aboutUs', {
            templateUrl: 'aboutUs/about.us.html',
            controller: 'AboutUsController'
        });
    }
})();