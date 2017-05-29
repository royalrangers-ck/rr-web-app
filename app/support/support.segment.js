(() => {

    'use strict';

    angular
        .module('app')
        .config(SupportSegment);

    function SupportSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/support', 'support').segment('support', {
            templateUrl: 'support/support.html',
            controller: 'SupportController'
        });
    }
})();