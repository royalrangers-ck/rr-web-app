(() => {

    'use strict';

    angular
        .module('admin')
        .controller('TreeController', TreeController);

    function TreeController($log, PublicInfoService) {
        const vm = this;

        vm.royalRangersStructure = {};
        vm.collapsingItems = {};
        vm.collapseItem = collapseItem;

        vm.getCountries = getCountries;
        vm.getRegionsByCountry = getRegionsByCountry;
        vm.getCitiesByRegion = getCitiesByRegion;
        vm.getPlatoonsByCity = getPlatoonsByCity;
        vm.getSectionsByPlatoon = getSectionsByPlatoon;

        activate();

        ////

        function activate() {
            $log.debug('Init TreeController ...');
        }

        function collapseItem(itemName) {
            let item = itemName.toString();
            if (typeof vm.collapsingItems[item] === 'undefined') {
                vm.collapsingItems[item] = true;
            } else {
                vm.collapsingItems[item] = !vm.collapsingItems[item];
            }
        }

        function getCountries() {
            PublicInfoService.getCountries().$promise.then(function (res) {
                if (res.success) {
                    vm.royalRangersStructure.countries = res.data;
                }
            })
        }

        function getRegionsByCountry(country) {
            PublicInfoService.getRegion({countryId: country.id}).$promise.then(function (res) {
                if (res.success) {
                    country.regions = res.data;
                }
            })
        }

        function getCitiesByRegion(region) {
            PublicInfoService.getCity({regionId: region.id}).$promise.then(function (res) {
                if (res.success) {
                    region.cities = res.data;
                }
            })
        }

        function getPlatoonsByCity(city) {
            PublicInfoService.getPlatoon({cityId: city.id}).$promise.then(function (res) {
                if (res.success) {
                    city.platoons = res.data;
                }
            })
        }

        function getSectionsByPlatoon(platoon) {
            PublicInfoService.getSection({platoonId: platoon.id}).$promise.then(function (res) {
                if (res.success) {
                    platoon.sections = res.data;
                }
            })
        }
    }
})();

