(() => {

    'use strict';

    angular
        .module('app')
        .config(ConfirmationSegment);

    function ConfirmationSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/confirmation', 'confirmation').segment('confirmation', {
            templateUrl: 'utils/auth/confirmation/confirmation.html',
            controller: 'ConfirmationController'
        });
    }
})();