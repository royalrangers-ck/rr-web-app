(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreateRegionController', CreateRegionController);

    function CreateRegionController ($log, $http, growl, Endpoints) {
        const vm = this;

        vm.regions = [];
        vm.newRegion = '';

        vm.createNewRegion = createNewRegion;

        activate();

        ////

        function activate () {
            $log.debug('Init CreateRegionController ...');
            getRegions();
        }

        function getRegions() {
            $http.get(Endpoints.REGIONS).then((res) => {
               
                if(res.data.success) {
                    vm.regions = res.data.data;
                    $log.debug('response', vm.regions);
                }else{
                    growl.error(res.data.data.message);
                }
            });
        }

        function createNewRegion(e) {
            e.preventDefault();
            $log.debug('createRegion', vm.newRegion);
        }
    }
})();