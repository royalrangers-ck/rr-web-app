(() => {

    'use strict';

    angular
        .module('admin')
        .config(CreateRegionSegment);

    function CreateRegionSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/create/region', 'create.region')
            .within('create')
            .segment('region', {
                templateUrl: 'create/region/region.html',
                controller: 'CreateRegionController',
                controllerAs: 'vm',
                resolve: {
                    regionsProm: function (PublicInfoService) {
                        return PublicInfoService.getRegions().$promise;
                    },
                    countriesProm: function (PublicInfoService) {
                        return PublicInfoService.getCountries().$promise;
                    }
                }
            });
    }
})();