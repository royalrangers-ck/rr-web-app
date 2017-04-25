(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', '$rootScope'];
    function HomeController($log, $rootScope) {
        const vm = this;
        vm.noImageAvailable = $rootScope.noImageAvailable;
        vm.avatarUrl = $rootScope.avatarUrl;

        activate();

        function activate() {
            $log.debug('Init HomeController ...');
            $log.debug('Init $rootScope ...', $rootScope);
        }
    }

})();
