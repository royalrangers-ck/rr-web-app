(() => {

    'use strict';

    angular
        .module('app')
        .config(HomeSegment);

    HomeSegment.$inject = ['$routeSegmentProvider', '$routeProvider'];
    function HomeSegment($routeSegmentProvider, $routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider.when('/', 'home').segment('home', {
            templateUrl: 'home/home.html',
            controller: 'HomeController'
        });
    }
})();