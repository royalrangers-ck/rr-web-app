(() => {

    'use strict';

    angular
        .module('app')
        .controller('TestFormModalController', TestFormModalController);

    function TestFormModalController ($uibModalInstance, Constants, NotificationService, ProfileTestsFactory, $location, $log) {
        const vm = this;

        vm.close = close;
        vm.submit = submit;
        vm.testTypes = Constants.TEST_TYPES;

        ////

        function close(data) {
            $uibModalInstance.close(data);
        }

        function submit () {

            if (!vm.form || vm.form.$invalid) {
                return vm.form.$submitted = false;
            }

            let req = {
                name: vm.test.name,
                shortDescription: vm.test.shortDescription,
                description: vm.test.description,
                testType: vm.test.testType
            };

            ProfileTestsFactory.createTest(req, (res) => {
                if (res.success) {
                    $uibModalInstance.close();
                    $location.path('/profile/test/' + res.data.id);
                } else {
                    NotificationService.error(res.data.message);
                }
            });
        }
    }
})();
