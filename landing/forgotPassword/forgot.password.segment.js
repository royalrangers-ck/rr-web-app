(() => {

    'use strict';

    angular
        .module('app')
        .config(ForgotPasswordSegment);

    ForgotPasswordSegment.$inject = ['$routeSegmentProvider'];
    function ForgotPasswordSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/forgotPassword', 'forgotPassword').segment('forgotPassword', {
            templateUrl: 'forgotPassword/forgot.password.html',
            controller: 'ForgotPasswordController'
        });
    }
})();