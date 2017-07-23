(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreateCityController', CreateCityController);

    function CreateCityController($log, NotificationService, citiesProm, regionsProm, CreatePlacesService, $routeSegment) {
        const vm = this;

        vm.cities = [];
        vm.regions = [];
        vm.newCity = {};

        vm.createNewCity = createNewCity;

        activate();

        ////

        function activate() {
            $log.debug('Init CreateCityController ...');
            getCities();
            getRegions();
        }

        function getCities() {
            citiesProm.$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                    $log.debug('response', vm.cities);
                } else {
                    NotificationService.error(res.message);
                }
            });
        }
        function getRegions() {
            regionsProm.$promise.then((res) => {
                if (res.success) {
                    vm.regions = res.data;
                    $log.debug('response', vm.regions);
                } else {
                    NotificationService.error(res.message);
                }
            });
        }

        function createNewCity() {
            $log.debug('trying send data:', vm.newCity);

            if (isNaN(vm.newCity.regionId) || !vm.newCity.name) {
                $log.debug('wrong arguments:', vm.newCity);
                return;
            }

            let params = {
                "regionId": vm.newCity.regionId,
                "name": vm.newCity.name
            };

            CreatePlacesService.newCity(params).$promise.then(res => {
                if (res.success) {
                    NotificationService.info('Місто ' + vm.newCity.name + ' успішно створено');
                    $routeSegment.chain[1].reload();
                }
                else {
                    NotificationService.error(res.message);
                }
            });
        }
    }
})();