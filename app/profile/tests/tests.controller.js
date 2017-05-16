(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestsController', ProfileTestsController);

    ProfileTestsController.$inject = ['$log', '$http', 'AppModalService', 'Endpoints', 'ProfileTestsService'];
    function ProfileTestsController($log, $http, AppModalService, Endpoints, ProfileTestsService) {
        const vm = this;

        vm.allTests = ProfileTestsService.getAllTests();

        activate();

        ///

        function activate() {
            $log.debug('Init ProfileTests Controller ...');
            $log.debug('allTests ...', vm.allTests);
        }

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

    }
})();
