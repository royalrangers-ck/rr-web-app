(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'AppModalService', '$rootScope'];
    function HomeController($log, AppModalService, $rootScope) {
        const vm = this;
        vm.UploadUserLogo = AppModalService.UploadUserLogo;
        vm.noImageAvailable = $rootScope.noImageAvailable;
        vm.avatarUrl = $rootScope.avatarUrl;

        activate();

        function activate() {
            $log.debug('Init HomeController ...');
        }
    }

})();
