(() => {

    'use strict';

    angular
        .module('app')
        .config(ForgotPasswordSegment);

    ForgotPasswordSegment.$inject = ['$routeSegmentProvider'];
    function ForgotPasswordSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/forgotpassword', 'forgotPassword').segment('forgotPassword', {
            templateUrl: 'forgot_password_form/forgot_password_form.html',
            controller: "ForgotPasswordController"
        });
    }
})();