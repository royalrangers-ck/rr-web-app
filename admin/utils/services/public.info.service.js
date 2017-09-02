(() => {

    'use strict';

    angular
        .module('admin')
        .service('PublicInfoService', PublicInfoService);

    function PublicInfoService(PublicInfoFactory) {

        this.getCountries = PublicInfoFactory.countries;
        this.getRegion = PublicInfoFactory.region;
        this.getRegions = PublicInfoFactory.regions;
        this.getCity = PublicInfoFactory.city;
        this.getCities = PublicInfoFactory.cities;
        this.getPlatoon = PublicInfoFactory.platoon;
        this.getPlatoons = PublicInfoFactory.platoons;
        this.getSection = PublicInfoFactory.section;
        this.getSections = PublicInfoFactory.sections;
        this.getRank = PublicInfoFactory.rank;
    }
})();
