(() => {

    'use strict';

    angular
        .module('app')
        .config(HowItWorksSegment);

    HowItWorksSegment.$inject = ['$routeSegmentProvider'];
    function HowItWorksSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/howItWorks', 'howItWorks').segment('howItWorks', {
            templateUrl: 'howItWorks/howItWorks.html',
            controller: 'HowItWorksController'
        });
    }
})();