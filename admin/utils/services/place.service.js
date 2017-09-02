(() => {

    'use strict';

    angular
        .module('admin')
        .service('PlaceService', PlaceService);

    function PlaceService(PlaceFactory) {

        const vm = this;

        vm.createCountry = PlaceFactory.country;
        vm.createRegion = PlaceFactory.region;
        vm.createCity = PlaceFactory.city;
        vm.createPlatoon = PlaceFactory.platoon;
        vm.createSection = PlaceFactory.section;
    }
})();
