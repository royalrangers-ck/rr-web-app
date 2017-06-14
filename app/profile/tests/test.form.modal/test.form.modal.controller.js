(() => {

    'use strict';

    angular
        .module('app')
        .controller('TestFormModalController', TestFormModalController);

    function TestFormModalController ($uibModalInstance, $http, Endpoints, growl, $location, $log) {
        const vm = this;

        vm.close = close;
        vm.submit = submit;

        ////

        function close(data) {
            $uibModalInstance.close(data);
        }

        function submit () {

            if (!vm.form || vm.form.$invalid) {
                return vm.form.$submitted = false;
            }

            let data = {
                name: vm.test.name,
                shortDescription: vm.test.shortDescription,
                description: vm.test.description,
                testType: vm.test.testType
            };

            $http.post(Endpoints.ACHIEVEMENTS_TEST, data).then((res) => {
                if (res.data.success) {
                    growl.success(res.data.data.message);
                    $uibModalInstance.close();
                } else {
                    growl.error(res.data.data.message);
                }
            });
        }
    }
})();
