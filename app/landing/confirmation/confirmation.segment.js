(() => {

    'use strict';

    angular
        .module('app')
        .config(ConfirmationSegment);

    ConfirmationSegment.$inject = ['$routeSegmentProvider'];
    function ConfirmationSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/confirmation', 'landing.confirmation').within('landing').segment('confirmation', {
            templateUrl: 'landing/confirmation/confirmation.html',
            controller: 'ConfirmationController'
        });
    }
})();