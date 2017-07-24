(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreateRegionController', CreateRegionController);

    function CreateRegionController ($log, NotificationService, regionsPromise, countriesPromise, PlaceService, $routeSegment) {
        const vm = this;

        vm.regions = [];
        vm.countries = [];
        vm.newRegion = {};

        vm.createNewRegion = createNewRegion;

        activate();

        ////

        function activate () {
            $log.debug('Init CreateRegionController ...');
            getRegions();
            getCountries();
        }

        function getRegions() {
            regionsPromise.$promise.then((res) => {
               
                if(res.success) {
                    vm.regions = res.data;
                    $log.debug('response', vm.regions);
                }else{
                    NotificationService.error(res.message);
                }
            });
        }

        function getCountries() {
            countriesPromise.$promise.then((res) => {

                if(res.success) {
                    vm.countries = res.data;
                    $log.debug('response', vm.countries);
                }else{
                    NotificationService.error(res.message);
                }
            });
        }

        function createNewRegion() {
            $log.debug('trying send data:', vm.newRegion);

            if (isNaN(vm.newRegion.countryId) || !vm.newRegion.name) {
                $log.debug('wrong arguments:', vm.newRegion);
                return;
            }

            let params = {
                "countryId": vm.newRegion.countryId,
                "name": vm.newRegion.name
            };

            PlaceService.createRegion(params).$promise.then(res => {
                if (res.success) {
                    NotificationService.info('Регіон ' + vm.newRegion.name + ' успішно створений');
                    $routeSegment.reload()
                }
                else {
                    NotificationService.error(res.message);
                }
            });
        }
    }
})();