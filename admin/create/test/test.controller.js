(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreateTestController', CreateTestController);

    function CreateTestController($log, NotificationService, testsPromise, ModalDialogService, testColors, $location) {
        const vm = this;
        let allTests = [];

        vm.tests = allTests;
        vm.newTest = {};
        vm.editTest = editTest;
        vm.testColors = testColors;
        vm.filter = {
            color: '',
            testName: '',
            run: filterTests
        };

        vm.createNewTest = createNewTest;

        activate();

        ////

        function activate() {
            $log.debug('Init CreateCountryController ...');
            getTests();
        }

        function getTests() {
            testsPromise.$promise.then((res) => {
                if (res.success) {
                    allTests = res.data;
                    vm.tests = allTests;
                    $log.debug('response', vm.tests);
                } else {
                    NotificationService.error(res.message);
                }
            });
        }

        function editTest(testId) {
            $location.path('edit/test/' + testId);
        }
        
        function filterTests() {
            let temp = allTests;
            if (vm.filter.color !== '' && vm.filter.color !== null) {
                temp = temp.filter((item) => {
                    return item.testType === vm.filter.color;
                });
            }
            if (vm.filter.testName) {
                temp = temp.filter((item) => {
                    let regex = new RegExp(vm.filter.testName, 'i');
                    return regex.test(item.name);
                });
            }
            vm.tests = temp;
            vm.filter.color = '';
            vm.filter.testName = '';
        }
        function createNewTest() {
            ModalDialogService.createTestModal();
        }
    }
})();