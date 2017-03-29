(() => {

    'use strict';

    angular
        .module('app')
        .config(AboutUsSegment);

    AboutUsSegment.$inject = ['$routeSegmentProvider'];
    function AboutUsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/howThisWork', 'howThisWork').segment('howThisWork', {
            templateUrl: 'how.this.work/how.this.work.html',
            controller: 'HowThisWorkController'
        });

    }
})();