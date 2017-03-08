(() => {

    'use strict';

    angular
        .module('app')
        .config(AboutUsSegment);

    AboutUsSegment.$inject = ['$routeSegmentProvider'];
    function AboutUsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/howThisWork', 'landing.howThisWork').within('landing').segment('howThisWork', {
            templateUrl: 'landing/howThisWork/howThisWork.html',
            controller: 'HowThisWorkController'
        });

    }
})();