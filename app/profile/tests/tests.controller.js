(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestsController', ProfileTestsController);

    function ProfileTestsController(AppModalService, allTestsResolve, UserService) {
        const vm = this;

        vm.tests = [];
        vm.infoMessage = '';
        vm.profileModal = profileModal;
        vm.newTestModal = newTestModal;
        vm.states = Constants.ACHIEVEMENTS_STATES;
        vm.currentUser = getUser();

        activate();

        ///

        function activate() {
            getTests();
        }

        function getTests() {
            vm.infoMessage = 'Пошук тестів...';
            allTestsResolve.$promise.then(
                (res) => {
                    if (res.success) {
                        addTestsStates(res.data);
                        vm.tests = normalizeStructureTests(res.data);
                        if (vm.tests.length !== 0) {
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
                res.data.forEach((userTest) => {
                    addState(tests.find((test) => test.id == userTest.test.id), userTest.achievementState);
                });
            });

            function addState(test, testState) {
                let cons = Constants.ACHIEVEMENTS_STATES;
                if (!test && !testState) return;
                test.rejected = cons[testState] == cons.REJECTED;
                if (!test.rejected) {
                    test.status = cons[testState] ? cons[testState] : testState;
                }
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

        function getUser () {
            return UserService.get();
        }
    }
})();
