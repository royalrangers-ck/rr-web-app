(() => {

    'use strict';

    angular
        .module('app')
        .config(AppSegment);

    function AppSegment($routeSegmentProvider, $routeProvider) {
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider.when('/', 'app').segment('app', {
            default: true,
            templateUrl: 'home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    }
})();