(() => {

    'use strict';

    angular
        .module('admin')
        .config(CreateCitySegment);

    function CreateCitySegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/create/city', 'create.city')
            .within('create')
            .segment('city', {
                    templateUrl: 'create/city/city.html',
                    controller: 'CreateCityController',
                    controllerAs: 'vm',
                    resolve: {
                        citiesProm: function (PublicInfoService) {
                            return PublicInfoService.getCities().$promise;
                        },
                        regionsProm: function (PublicInfoService) {
                            return PublicInfoService.getRegions().$promise;
                        }
                    }
                }
            );
    }
})();