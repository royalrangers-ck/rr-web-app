(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestsController', ProfileTestsController);

    ProfileTestsController.$inject = ['$log', 'AppModalService'];
    function ProfileTestsController ($log, AppModalService) {
        const vm = this;
        vm.tests = {
            blue: [
                { id: 1, name: 'Blue Tests 1' },
                { id: 2, name: 'Blue Tests 2', action: 'inProgress' },
                { id: 3, name: 'Blue Tests 3', action: 'notGet' },
                { id: 4, name: 'Blue Tests 4', action: 'notGet' },
                { id: 5, name: 'Blue Tests 5', action: 'notGet' }
            ],
            yellow: [
                { id: 1, name: 'Yellow Tests 1' },
                { id: 2, name: 'Yellow Tests 2' },
                { id: 3, name: 'Yellow Tests 3', action: 'inProgress' },
                { id: 4, name: 'Yellow Tests 4', action: 'notGet' },
                { id: 5, name: 'Yellow Tests 5', action: 'notGet' }
            ],
            green: [
                { id: 1, name: 'Green Tests1' },
                { id: 2, name: 'Green Tests2' },
                { id: 3, name: 'Green Tests3' },
                { id: 4, name: 'Green Tests4', action: 'inProgress' },
                { id: 5, name: 'Green Tests5', action: 'notGet' }
            ],
            cyan: [
                { id: 1, name: 'Cyan Tests 1' },
                { id: 2, name: 'Cyan Tests 2' },
                { id: 3, name: 'Cyan Tests 3', action: 'inProgress' },
                { id: 4, name: 'Cyan Tests 4', action: 'notGet' },
                { id: 5, name: 'Cyan Tests 5', action: 'notGet' }
            ]
        };

        vm.profileModal = function (testId, color) {
            AppModalService.profileModal(findTest(testId, color));
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
            $log.debug('Init ProfileCamps Controller ...');
        }

        function findTest (testId, color) {
            return vm.tests[color].find((test) => {
                return test.id === testId;
            });
        }
    }
})();
