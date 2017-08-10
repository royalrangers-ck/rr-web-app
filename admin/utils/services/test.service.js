(() => {

    'use strict';

    angular
        .module('admin')
        .service('TestService', TestService);

    function TestService(TestFactory) {

        const vm = this;

        vm.getTests = TestFactory.get;
        vm.getAllTests = TestFactory.getAll;
        vm.createTest = TestFactory.save;
        vm.getById = TestFactory.getById;
        vm.getTestColors = function () {
            return vm.getAllTests().$promise.then((res) => {
                return res.data.reduce((colors, current) => {
                    if (!colors.some((item) => item == current.testType)) {
                        colors.push(current.testType);
                    }
                    return colors;
                }, []);
            });
        }
    }
})();
