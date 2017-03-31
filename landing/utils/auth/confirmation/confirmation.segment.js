(() => {

    'use strict';

    angular
        .module('app')
        .config(ConfirmationSegment);

    ConfirmationSegment.$inject = ['$routeSegmentProvider'];
    function ConfirmationSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/confirmation', 'confirmation').segment('confirmation', {
            templateUrl: 'utils/auth/confirmation/confirmation.html',
            controller: 'ConfirmationController'
        });
    }
})();