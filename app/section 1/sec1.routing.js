(() => {

    'use strict';

    angular
        .module('app')
        .config(Sec1Route);


    Sec1Route.$inject = ['$routeSegmentProvider', '$routeProvider'];

    function Sec1Route($routeSegmentProvider, $routeProvider) {
        activate();

        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider
            .when('/section1', 'sec1')

            .segment('sec1', {
                templateUrl: '../app/section 1/sec1.html',
                controller: 'Sec1Controller'
            });

        // $routeProvider.otherwise({redirectTo: '/#/section1'});

        function activate() {
            console.log('Init Sec1 route');
        }
    }

})();