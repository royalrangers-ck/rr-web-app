(() => {

    'use strict';

    angular
        .module('admin')
        .service('PublicInfoService', PublicInfoService);

    function PublicInfoService(PublicInfoFactory) {

        const vm = this;

        vm.getCountries = PublicInfoFactory.countries;
        vm.getRegion = PublicInfoFactory.region;
        vm.getRegions = PublicInfoFactory.regions;
        vm.getCity = PublicInfoFactory.city;
        vm.getCities = PublicInfoFactory.cities;
        vm.getPlatoon = PublicInfoFactory.platoon;
        vm.getSection = PublicInfoFactory.section;
        vm.getRank = PublicInfoFactory.rank;
    }
})();
