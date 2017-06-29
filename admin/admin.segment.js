(() => {

    'use strict';

    angular
        .module('admin')
        .config(AppSegment);

    function AppSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/', 'home').segment('home', {
            'default': true,
            templateUrl: 'home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });
    }
})();
