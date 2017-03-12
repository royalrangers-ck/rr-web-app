(() => {

    'use strict';

    angular
        .module('app')
        .config(ForgotPasswordSegment);

    ForgotPasswordSegment.$inject = ['$routeSegmentProvider'];
    function ForgotPasswordSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/forgotPassword', 'landing.forgotPassword').within('landing').segment('forgotPassword', {
            templateUrl: 'landing/forgotPassword/forgot.password.html',
            controller: 'ForgotPasswordController'
        });
    }
})();