(function () {
    'use strict';

    angular
        .module('app')
        .directive('maintenanceWork', MaintenanceWork);

    function MaintenanceWork () {
        return {
            restrict: 'E',
            templateUrl: '/app/utils/directives/maintenance.work/maintenance.work.html'
        };
    }
})();
