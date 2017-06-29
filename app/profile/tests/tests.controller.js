(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestsController', ProfileTestsController);

    function ProfileTestsController(userTestsResponse, testsResponse, Constants, AppModalService, growl, $log) {
        const vm = this;

        vm.tests = [];
        vm.infoMessage = '';
        vm.profileModal = profileModal;
        vm.newTestModal = newTestModal;
        vm.states = Constants.ACHIEVEMENTS_STATES;

        activate();

        ///

        function activate() {

            if (userTestsResponse.success && testsResponse.success) {
                getTests();
                $log.debug(vm.tests);
            } else {
                growl.error('Error');
            }

        }

        function getTests() {
            vm.infoMessage = 'Пошук тестів...';

            if (testsResponse.success) {
                vm.tests = normalizeStructureTests(testsResponse.data);
                vm.infoMessage = (vm.tests.length !== 0) ? '' : 'Нажаль, доступних тестів не знайдено.';
            } else {
                growl.error(testsResponse.data.message);
            }
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
        function normalizeStructureTests(denormalizeTestsData) {
            return denormalizeTestsData.reduce((tests, test) => {

                if (typeof tests[test.testType] === 'undefined') {
                    tests[test.testType] = {
                        name: test.testType,
                        list: []
                    };
                }

                test['state'] = getState(test.id);
                tests[test.testType].list.push(test);

                return tests;
            }, {});
        }

        function getState (testId) {

            let userTest = userTestsResponse.data.find((userTest) => userTest.test.id === testId);

            if (userTest) {
                return {
                    name: userTest.achievementState ? Constants.ACHIEVEMENTS_STATES[userTest.achievementState] : Constants.ACHIEVEMENTS_STATES['NOT_STARTED'],
                    className: getStateClassName(userTest.achievementState)
                };
            } else {
                return {
                    name: Constants.ACHIEVEMENTS_STATES['NOT_STARTED'],
                    className: getStateClassName('NOT_STARTED')
                };
            }

        }

        function getStateClassName (achievementState = 'NOT_STARTED') {
            return 'achievements__item--' + achievementState.toLowerCase().replace('_', '-');
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
