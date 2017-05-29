(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestsController', ProfileTestsController);

    function ProfileTestsController($log, $http, AppModalService, Endpoints) {
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
            $http.get(Endpoints.TEST).then(
                (res) => {
                    if (res.data.success) {
                        vm.tests = normalizeStructureTests(res.data.data);
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
