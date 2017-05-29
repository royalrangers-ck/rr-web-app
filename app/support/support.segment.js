(() => {

    'use strict';

    angular
        .module('app')
        .config(SupportSegment);

    SupportSegment.$inject = ['$routeSegmentProvider'];
    function SupportSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/support', 'support').segment('support', {
            'default': true,
            templateUrl: 'support/support.html',
            controller: 'SupportController'
        });
    }
})();