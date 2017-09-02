(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreatePlatoonController', CreatePlatoonController);

    function CreatePlatoonController($scope, $log, countries, PublicInfoService) {
        const vm = this;

        vm.countries = countries.data;
        vm.regions = {};
        vm.cities = {};
        vm.formData = {};

        vm.datePicker = {};
        vm.datePicker.options = {
            minDate: new Date().setHours(0, 0, 0, 0),
            startingDay: 0
        };
        vm.datePicker.opened = false;
        vm.datePicker.open = () => vm.datePicker.opened = true;

        vm.createPlatoon = createPlatoon;
        vm.getRegionsByCountry = getRegionsByCountry;
        vm.getCitiesByRegion = getCitiesByRegion;

        activate();

        ////

        function activate() {
            $log.debug('Init CreatePlatoonController ...');
        }

        function createPlatoon() {

        }

        function getRegionsByCountry(country) {
            PublicInfoService.getRegion({countryId: country.id}).$promise.then(function (res) {
                if (res.success) {
                    country.regions = res.data;
                    vm.cities = [];
                    vm.formData.platoon.cityId = null;
                }
            })
        }

        function getCitiesByRegion(region) {
            PublicInfoService.getCity({regionId: region.id}).$promise.then(function (res) {
                if (res.success) {
                    region.cities = res.data;
                    vm.formData.platoon.cityId = null;
                }
            })
        }
    }
})();