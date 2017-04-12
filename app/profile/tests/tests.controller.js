(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestsController', ProfileTestsController);

    ProfileTestsController.$inject = ['$log', '$http', 'AppModalService', 'Endpoints'];
    function ProfileTestsController ($log, $http, AppModalService, Endpoints) {
        const vm = this;

        vm.tests = getTests();

        vm.profileModal = function (testId, color) {
            AppModalService.profileModal(findTest(testId, color), 'test');
        };

        vm.isInProgress = function (testId, color) {
            let currentTest = findTest(testId, color);
            return currentTest.action == 'inProgress';
        };

        vm.isNotGet = function (testId, color) {
            let currentTest = findTest(testId, color);
            return currentTest.action == 'notGet' ? 'not-get' : '';
        };

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileTests Controller ...');
        }

        function getTests () {
            $http.get(Endpoints.TEST).then((res) => {
                if (res.data.success) {
                    // ToDo.zpawn: refactor that
                    vm.tests = res.data.data.length !== 0 ? res.data.data.length : getDemoTests();
                }
                $log.debug('==> testResponse:', res);
            });
        }

        function findTest (testId, color) {
            return vm.tests[color].find((test) => {
                return test.id === testId;
            });
        }

        // ToDo.zpawn: remove that
        function getDemoTests () {
            return {
                blue: [
                    { id: 1, name: 'Blue Tests 1' },
                    { id: 2, name: 'Blue Tests 2', action: 'inProgress' },
                    { id: 3, name: 'Blue Tests 3', action: 'notGet' },
                    { id: 4, name: 'Blue Tests 4', action: 'notGet' },
                    { id: 5, name: 'Blue Tests 5', action: 'notGet' }
                ],
                yellow: [
                    { id: 6, name: 'Yellow Tests 1' },
                    { id: 7, name: 'Yellow Tests 2' },
                    { id: 8, name: 'Yellow Tests 3', action: 'inProgress' },
                    { id: 9, name: 'Yellow Tests 4', action: 'notGet' },
                    { id: 10, name: 'Yellow Tests 5', action: 'notGet' }
                ],
                green: [
                    { id: 11, name: 'Green Tests1' },
                    { id: 12, name: 'Green Tests2' },
                    { id: 13, name: 'Green Tests3' },
                    { id: 14, name: 'Green Tests4', action: 'inProgress' },
                    { id: 15, name: 'Green Tests5', action: 'notGet' }
                ],
                cyan: [
                    { id: 16, name: 'Cyan Tests 1' },
                    { id: 17, name: 'Cyan Tests 2' },
                    { id: 18, name: 'Cyan Tests 3', action: 'inProgress' },
                    { id: 19, name: 'Cyan Tests 4', action: 'notGet' },
                    { id: 20, name: 'Cyan Tests 5', action: 'notGet' }
                ]
            };
        }
    }
})();
