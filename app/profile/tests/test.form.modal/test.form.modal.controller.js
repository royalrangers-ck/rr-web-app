(() => {

    'use strict';

    angular
        .module('app')
        .controller('TestFormModalController', TestFormModalController);

    function TestFormModalController ($uibModalInstance, growl, ProfileTestsFactory, $location) {
        const vm = this;

        vm.close = close;
        vm.submit = submit;
        vm.testTypes = ['DEFAULT', 'BLUE', 'GREEN', 'YELLOW', 'LIGHTBLUE', 'RED', 'ORANGE', 'BROWN', 'PLATINUM'];

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
                if (res.data.success) {
                    growl.success(res.data.message);
                    $uibModalInstance.close();
                    // ToDo.zpawn: redirect to test page
                } else {
                    growl.error(res.data.message);
                }
            });
        }
    }
})();
