(() => {

    'use strict';

    angular
        .module('admin')
        .service('CreatePlacesService', CreatePlacesService);

    function CreatePlacesService(CreatePlacesFactory) {

        const vm = this;

        vm.newCountry = CreatePlacesFactory.country;
        vm.newRegion = CreatePlacesFactory.region;
        vm.newCity = CreatePlacesFactory.city;
    }
})();
