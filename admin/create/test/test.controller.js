(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreateTestController', CreateTestController);

    function CreateTestController($log, $routeSegment, NotificationService, testsPromise, ModalDialogService) {
        const vm = this;

        vm.tests = [];
        vm.newTest = {};

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
                    vm.tests = res.data;
                    $log.debug('response', vm.tests);
                } else {
                    NotificationService.error(res.message);
                }
            });
        }

        function createNewTest() {
            ModalDialogService.createTestModal();
        }
    }
})();