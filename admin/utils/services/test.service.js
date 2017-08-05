(() => {

    'use strict';

    angular
        .module('admin')
        .service('TestService', TestService);

    function TestService(TestFactory) {

        const vm = this;

        vm.getTests = TestFactory.get;
        vm.createTest = TestFactory.save;
    }
})();
