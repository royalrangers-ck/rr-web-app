(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestsController', ProfileTestsController);

    function ProfileTestsController($log, $http, AppModalService, Endpoints, allTestsResolve) {
        const vm = this;

        vm.tests = [];
        vm.infoMessage = '';
        vm.profileModal = profileModal;
        vm.newTestModal = newTestModal;

        activate();

        ///

        /**
         * @discription There we are grub test for current user age group, used resolve in test.segment
         */
        function activate() {
            getTests();
        }

        function getTests() {
            vm.infoMessage = 'Пошук тестів...';
            allTestsResolve.$promise.then(
                (res) => {
                    $log.debug(res);
                    if (res.success) {
                        vm.tests = normalizeStructureTests(res.data);
                        if (vm.tests.length != 0) {
                            vm.infoMessage = '';
                        }
                        else {
                            vm.infoMessage = 'Нажаль, доступних тестів не знайдено.';
                        }
                    }
                },
                (err) => {
                    vm.infoMessage = '';
                });
        }

        /**
         * Structure:
         * {
         *      testType: {
         *          name: 'testTypeName',
         *          list: [ ... ]
         *      },
         *      testType: {
         *          name: 'testTypeName',
         *          list: [ ... ]
         *      },
         *      ...
         * }
         */
        function normalizeStructureTests(denormalizeTests) {
            return denormalizeTests.reduce((tests, test) => {

                if (typeof tests[test.testType] === 'undefined') {
                    tests[test.testType] = {
                        name: test.testType,
                        list: []
                    };
                }

                tests[test.testType].list.push(test);

                return tests;
            }, {});
        }

        function profileModal(testId, testType) {
            AppModalService.profileModal(findTest(testId, testType), 'test');
        }

        function findTest(id, type) {
            return vm.tests[type].list.find((test) => {
                return test.id === id;
            });
        }

        function newTestModal() {
            AppModalService.testFormModal();
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

