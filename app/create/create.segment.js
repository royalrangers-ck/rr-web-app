(() => {

    'use strict';

    angular
        .module('app')
        .config(CreateSegment);

    function CreateSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/create', 'create').segment('create', {
            templateUrl: 'create/create.html',
            controller: 'CreateController',
            controllerAs: 'vm'
        });
    }
})();