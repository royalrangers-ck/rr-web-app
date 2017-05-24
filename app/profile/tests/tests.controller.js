(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestsController', ProfileTestsController);

    ProfileTestsController.$inject = ['$log', 'AppModalService', 'userTestsResolve', 'allTestsResolve', '$http', 'Endpoints'];
    function ProfileTestsController($log, AppModalService, userTestsResolve, allTestsResolve, $http, Endpoints) {
        const vm = this;
        vm.curentAgeGroupTests = [];
        vm.allTests = [];
        vm.colorSortedTest = [];
        vm.testsColors = [];

        activate();

        ///

        /**
         * @discription There we are grub test for current user age group, used resolve in test.segment
         */
        function activate() {
            $log.debug('Init ProfileTests Controller ...');

            getUserTests();
            getAllTests();
        }

        function getUserTests() {
            if (userTestsResolve.$promise) {
                userTestsResolve.$promise.then((res) => {
                    if (res.success) {
                        vm.curentAgeGroupTests = (res.data);
                        $log.debug('curentAgeGroupTests', vm.curentAgeGroupTests);

                    }
                });
            }
        }

        function getAllTests() {
            allTestsResolve.$promise.then((response) => {
                vm.allTests = response.data;
                $log.debug('all tests ', vm.allTests);

                /**
                 * @discription There we are sorted our test to color in  vm.colorSortedTest
                 * And get colors type in vm.testsColors
                 */
                vm.allTests.forEach((test) => {
                    if (!vm.colorSortedTest[test.testType]) {
                        vm.colorSortedTest[test.testType] = [];
                        vm.testsColors.push(test.testType);
                    }

                    vm.colorSortedTest[test.testType].push(test)
                });

                $log.debug('colorSortedTest ', vm.colorSortedTest);
                $log.debug('testsColors ', vm.testsColors)

            });
        }
    }
})();


// vm.tests = getTests();

// vm.profileModal = function (testId, color) {
//     AppModalService.profileModal(findTest(testId, color), 'test');
// };
//
// vm.isInProgress = function (testId, color) {
//     let currentTest = findTest(testId, color);
//     return currentTest.action == 'inProgress';
// };
//
// vm.isNotGet = function (testId, color) {
//     let currentTest = findTest(testId, color);
//     return currentTest.action == 'notGet' ? 'not-get' : '';
// };
//
//

// function getTests() {
//     $http.get(Endpoints.TEST).then((res) => {
//         if (res.data.success) {
//             // ToDo.zpawn: refactor that
//             vm.tests = res.data.data.length !== 0 ? res.data.data.length : getDemoTests();
//         }
//         $log.debug('==> testResponse:', res);
//     });
// }
//
// function findTest(testId, color) {
//     return vm.tests[color].find((test) => {
//         return test.id === testId;
//     });
// }

