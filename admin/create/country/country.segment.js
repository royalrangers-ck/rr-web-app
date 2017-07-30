(() => {

    'use strict';

    angular
        .module('admin')
        .config(CreateCountrySegment);

    function CreateCountrySegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/create/country', 'create.country')
            .within('create')
            .segment('country', {
                templateUrl: 'create/country/country.html',
                controller: 'CreateCountryController',
                controllerAs: 'vm',
                resolve: {
                    countriesPromise: function (PublicInfoService) {
                        return PublicInfoService.getCountries().$promise;
                    }
                }
            });
    }
})();