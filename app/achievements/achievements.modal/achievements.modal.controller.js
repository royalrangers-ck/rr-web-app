(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsModalController', AchievementsModalController);

    function AchievementsModalController ($uibModalInstance, ProfileTestsService) {
        const vm = this;

        vm.tests = getTests();
        vm.newTest = {};
        vm.close = close;
        vm.submit = submit;

        activate();

        ////

        function activate () {

        }

        function submit () {
            let newTest = {
                description: '',
                shortDescription: vm.newTest.description,
                name: vm.newTest.name,
                testType: "BLUE",
                userAgeGroups:["PIONEER", "RANGER"]
            };
            vm.tests.push(newTest);
            vm.newTest = {};
        }

        function close(data) {
            $uibModalInstance.close(data);
        }

        function getTests () {
            // ToDo.zpawn: get correct data
            ProfileTestsService.getTests().$promise.then(function (res) {
                if (res.success) {
                    vm.tests = res.data.reduce((tests, test) => {
                        if (test.shortDescription !== null && length < 10) {
                            tests.push(test);
                        }
                        return tests;
                    }, []);
                }
            });
        }
    }
})();
