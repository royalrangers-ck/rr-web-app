(() => {

    'use strict';

    angular
        .module('app')
        .config(ConfirmationForm);

    ConfirmationFormSegment.$inject = ['$routeSegmentProvider'];
    function ConfirmationFormSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/confirmationForm', 'confirmationForm').segment('confirmationForm', {
            templateUrl: 'confirmationForm/confirmationForm.html',
            controller: 'ConfirmationFormController'
        });
    }
})();