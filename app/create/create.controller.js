(() => {

    'use strict';

    angular
        .module('app')
        .controller('CreateController', CreateController);

    function CreateController ($log, $http, growl, Endpoints) {
        const vm = this;

        vm.cities = [];
        vm.newCity = '';

        vm.createNewCity = createNewCity;

        activate();
        $log.debug("ctrl", vm.cities);
        ////

        function activate () {
            $log.debug('Init CreateController ...');
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

        function createNewCity() {
            $log.debug('createCity', vm.newCity);
        }
    }
})();
