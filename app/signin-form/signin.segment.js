(() => {

    'use strict';

    angular
        .module('app')
        .config(SignInSegment);

    SignInSegment.$inject = ['$routeSegmentProvider', '$routeProvider'];
    function SignInSegment($routeSegmentProvider, $routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider.when('/login', 'signIn').segment('signIn', {
            templateUrl: 'signin-form/signin-form.html'
        });
    }
})();