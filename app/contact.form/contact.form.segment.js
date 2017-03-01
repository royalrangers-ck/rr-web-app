(() => {

    'use strict';

    angular
        .module('app')
        .config(HomeSegment);

    HomeSegment.$inject = ['$routeSegmentProvider'];
    function HomeSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/contactForm', 'contactForm').segment('contactForm', {
            templateUrl: 'contact.form/contact.form.html',
            controller: 'ContactFormController'
        });
    }
})();