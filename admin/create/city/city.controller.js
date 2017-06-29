(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreateCityController', CreateCityController);

    function CreateCityController ($log, $http, growl, Endpoints) {
        const vm = this;

        vm.cities = [];
        vm.newCity = '';

        vm.createNewCity = createNewCity;

        activate();
        
        ////

        function activate () {
            $log.debug('Init CreateCityController ...');
            getCities();
        }

        function getCities() {
            $http.get(Endpoints.CITIES).then((res) => {
               
                if(res.data.success) {
                    vm.cities = res.data.data;
                    $log.debug('response', vm.cities);
                }else{
                    growl.error(res.data.data.message);
                }
            });
        }

        function createNewCity(e) {
            e.preventDefault();
            $log.debug('createCity', vm.newCity);
        }
    }
})();