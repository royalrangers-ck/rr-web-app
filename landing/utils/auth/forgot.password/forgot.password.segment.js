(() => {

    'use strict';

    angular
        .module('app')
        .config(ForgotPasswordSegment);

    function ForgotPasswordSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/forgotPassword', 'forgotPassword').segment('forgotPassword', {
            templateUrl: 'utils/auth/forgot.password/forgot.password.html',
            controller: 'ForgotPasswordController'
        });
    }
})();