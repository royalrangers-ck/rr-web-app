(() => {

    'use strict';

    angular
        .module('admin')
        .config(CreatePlatoonSegment);

    function CreatePlatoonSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/create/platoon', 'create.platoon').within('create').segment('platoon', {
            templateUrl: 'create/platoon/platoon.html',
            controller: 'CreatePlatoonController',
            controllerAs: 'vm',
            resolve: {
                countries: function (PublicInfoService) {
                    return PublicInfoService.getCountries().$promise
                }
            }
        });
    }
})();