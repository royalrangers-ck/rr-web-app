(() => {

    'use strict';

    angular
        .module('app')
        .config(HomeSegment);

    HomeSegment.$inject = ['$routeSegmentProvider'];
    function HomeSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/home', 'landing.home').within('landing').segment('home', {
            'default': true,
            templateUrl: 'landing/home/home.html',
            controller: 'HomeController'
        });
    }
})();