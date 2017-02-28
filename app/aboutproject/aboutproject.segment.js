(() => {

    'use strict';

    angular
        .module('app')
        .config(AboutProjectSegment);

    AboutProjectSegment.$inject = ['$routeSegmentProvider', '$routeProvider'];
    function AboutProjectSegment($routeSegmentProvider, $routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider.when('/aboutProject', 'aboutProject').segment('aboutProject', {
            templateUrl: 'aboutproject/aboutproject.html',
            controller: "AboutProjectController"
        });
    }
})();