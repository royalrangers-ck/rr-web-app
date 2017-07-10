(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestController', ProfileTestController);

    function ProfileTestController(UserService, Constants, AppModalService, testResolve, $location, ProfileTestService, userTestsResolve, $log, NotificationService, $routeSegment) {
        const vm = this;

        vm.currentUser = UserService.get();
        vm.defaultImage = Constants.DEFAULT_IMG_SRC;
        vm.taskFormModal = AppModalService.taskFormModal;
        vm.test = {
            content: {},
            started: false,
            containTasks: false,
            setup: setStartButton,
            start: startTest,
            stop: stopTest
        }

        activate();

        ///

        function activate() {
            getTest();
        }

        function getTest() {
            testResolve.$promise.then((res) => {
                if (res.success) {
                    vm.test.content = res.data;
                    vm.test.setup();
                }
            });
        }

        function setStartButton() {
            vm.test.containTasks = Boolean(vm.test.content.taskList.length);
            userTestsResolve.$promise.then((res) => {
                let userTest = res.data.find(val => val.test.id == vm.test.content.id);
                if (userTest) {
                    let cons = Constants.ACHIEVEMENTS_STATES;
                    if (cons[userTest.test.achievementState] != cons.NOT_STARTED) {
                        vm.test.started = true;
                    }
                }
            });
        }

        function startTest() {
            ProfileTestService.startTest({ "testId": vm.test.content.id }).$promise.then(() => {
                $log.debug('Test started successfully.');
                NotificationService.info('Тест успішно розпочатий.');
                $routeSegment.reload()
            });
        }

        function stopTest() {
            userTestsResolve.$promise.then((res) => {
                let userTest = res.data.find(val => val.test.id == vm.test.content.id);
                if (userTest) {
                    ProfileTestService.stopAndDeleteTest({ 'id': userTest.id }).$promise.then(() => {
                        $log.debug('Test stopped successfully.');
                        NotificationService.info('Тест припинений');
                        $routeSegment.reload()
                    });
                }
            });

        }
    }
})();
