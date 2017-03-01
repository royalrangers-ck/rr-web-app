(() => {

    'use strict';

    angular
        .module('app')
        .config(SignInSegment);

    SignInSegment.$inject = ['$routeSegmentProvider'];
    function SignInSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/login', 'signIn').segment('signIn', {
            templateUrl: 'signin-form/signin-form.html'
        });
    }
})();