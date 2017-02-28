(() => {

    'use strict';

    angular
        .module('app')
        .config(HowItWorksSegment);

    HowItWorksSegment.$inject = ['$routeSegmentProvider', '$routeProvider'];
    function HowItWorksSegment($routeSegmentProvider, $routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider.when('/', 'home').segment('howItWorks', {
            templateUrl: 'howItWorks/howItWorks.html',
            controller: 'HowItWorksController'
        });
    }
})();