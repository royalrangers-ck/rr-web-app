(() => {

    'use strict';

    angular
        .module('app')
        .config(ConfirmationSegment);

    ConfirmationSegment.$inject = ['$routeSegmentProvider'];
    function ConfirmationSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/confirmationForm', 'confirmationForm').segment('confirmationForm', {
            templateUrl: 'confirmation/confirmation.html',
            controller: 'ConfirmationController'
        });
    }
})();