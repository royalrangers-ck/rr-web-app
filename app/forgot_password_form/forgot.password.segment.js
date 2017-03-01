(() => {

    'use strict';

    angular
        .module('app')
        .config(ForgotPasswordSegment);

    ForgotPasswordSegment.$inject = ['$routeSegmentProvider', '$routeProvider'];
    function ForgotPasswordSegment($routeSegmentProvider, $routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider.when('/forgotpassword', 'forgotPassword').segment('forgotPassword', {
            templateUrl: 'forgot_password_form/forgot_password_form.html',
            controller: "ForgotPasswordController"
        });
    }
})();