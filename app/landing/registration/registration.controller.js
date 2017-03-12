(() => {

    'use strict';

    angular
        .module('app')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$log', '$route', '$http', 'RegistrationService'];
    function RegistrationController($log, $route, $http, RegistrationService) {
        const vm = this;

        vm.data = {};
        vm.availableOptions = [];
        vm.submit = submit;

        activate();

        ///

        function activate() {
            $log.debug('Init RegistrationController ...');
        }

        function submit() {
            let afterSave = function (res) {
                if (res.success) {
                    $route.path('/app');
                }
            };

            //RegistrationService.registerUser(vm.data, afterSave)
            $http.post('/api/registration', vm.data, function (res) {
                console.log(res);
            })
        }
    }
})();