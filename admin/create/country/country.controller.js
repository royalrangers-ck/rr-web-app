(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreateCountryController', CreateCountryController);

    function CreateCountryController($log, $routeSegment, NotificationService, countriesProm, CreatePlacesService) {
        const vm = this;

        vm.countries = [];
        vm.newCountry = {};

        vm.createNewCountry = createNewCountry;

        activate();

        ////

        function activate() {
            $log.debug('Init CreateCountryController ...');
            getCountries();
        }

        function getCountries() {
            countriesProm.$promise.then((res) => {
                if (res.success) {
                    vm.countries = res.data;
                    $log.debug('response', vm.countries);
                } else {
                    NotificationService.error(res.message);
                }
            });
        }

        function createNewCountry() {
            $log.debug('trying send data:', vm.newCountry);

            if (!vm.newCountry.name) {
                $log.debug('wrong arguments:', vm.newCountry);
                return;
            }

            let params = {
                "name": vm.newCountry.name
            };

            CreatePlacesService.newCountry(params).$promise.then(res => {
                if (res.success) {
                    NotificationService.info('Країна ' + vm.newCountry.name + ' успішно створена');
                    $routeSegment.chain[1].reload();
                }
                else {
                    NotificationService.error(res.message);
                }
            });
        }
    }
})();