(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreateCountryController', CreateCountryController);

    function CreateCountryController ($log, $http, NotificationService, Endpoints) {
        const vm = this;

        vm.countries = [];
        vm.newCountry = '';

        vm.createNewCountry = createNewCountry;

        activate();

        ////

        function activate () {
            $log.debug('Init CreateCountryController ...');
            getCountries();
        }

        function getCountries() {
            $http.get(Endpoints.COUNTRIES).then((res) => {
               
                if(res.data.success) {
                    vm.countries = res.data.data;
                    $log.debug('response', vm.countries);
                }else{
                    NotificationService.error(res.data.data.message);
                }
            });
        }

        function createNewCountry(e) {
            e.preventDefault();
            $log.debug('createCountry', vm.newCountry);
        }
    }
})();