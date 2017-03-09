(() => {

    'use strict';

    angular
        .module('app')
        .config(AppSegment);

    AppSegment.$inject = ['$routeSegmentProvider', '$routeProvider'];
    function AppSegment($routeSegmentProvider, $routeProvider) {
        $routeSegmentProvider.options.autoLoadTemplates = true;

        /** Landing pages */
        $routeSegmentProvider.when('/', 'landing').segment('landing', {
            templateUrl: 'landing/landing.html',
            controller: 'LandingController'
        });

        /** Application pages */
        $routeSegmentProvider.when('/app', 'app').segment('app', {
            templateUrl: 'app/app.html',
            controller: 'AppController'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    }
})();