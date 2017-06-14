(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestsController', ProfileTestsController);

    function ProfileTestsController($log, AppModalService, allTestsResolve, userTestsResolve) {
        const vm = this;

        vm.tests = [];
        vm.infoMessage = '';
        vm.profileModal = profileModal;
        vm.newTestModal = newTestModal;

        activate();

        ///

        function activate() {
            getTests();
        }

        function getTests() {
            vm.infoMessage = 'Пошук тестів...';
            allTestsResolve.$promise.then(
                (res) => {
                    $log.debug(res);
                    if (res.success) {
                        addTestsStates(res.data);
                        vm.tests = normalizeStructureTests(res.data);
                        if (vm.tests.length !== 0) {
                            $log.debug('Tests loaded:', vm.tests);
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

        function addTestsStates(tests) {
            userTestsResolve.$promise.then((res) => {
                $log.debug('Load user tests:', res.data);
                res.data.forEach((userTest) => {
                    tests.find((test) => test.id == userTest.test.id)
                    .achievementState = userTest.achievementState;
                });
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
