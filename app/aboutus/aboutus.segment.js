(() => {

    'use strict';

    angular
        .module('app')
        .config(AboutUsSegment);

    AboutUsSegment.$inject = ['$routeSegmentProvider', '$routeProvider'];
    function AboutUsSegment($routeSegmentProvider, $routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider.when('/aboutUs', 'aboutUs').segment('aboutUs', {
            templateUrl: 'aboutus/aboutus.html',
            controller: "AboutUsController"
        });
    }
})();