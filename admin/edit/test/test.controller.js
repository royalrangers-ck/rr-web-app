(() => {

    'use strict';

    angular
        .module('admin')
        .controller('EditTestController', EditTestController);

    function EditTestController(Constants, testResolve, ModalDialogService, testColors, TestService, NotificationService, $routeSegment) {
        console.log('edit test running');
        const vm = this;

        vm.defaultImage = Constants.DEFAULT_IMG_SRC;
        vm.testColors = testColors;
        vm.updateTest = updateTest;
        vm.addTask = addTask;
        vm.test = {};

        activate();

        ///

        function activate() {
            getTest();
        }

        function getTest() {
            testResolve.$promise.then((res) => {
                if (res.success) {
                    vm.test = res.data;
                }
            });
        }
        
        function updateTest() {
            let valuesToSend = {
                "name": vm.test.name,
                "description": vm.test.description,
                "shortDescription": vm.test.shortDescription,
                "testType": vm.test.testType,
                "logoUrl": "static/vendor/images/demo/profile.7.jpg"
            };
            TestService.updateTest({'id': vm.test.id}, valuesToSend, (res) => {
                if (res.success) {
                    NotificationService.info('Тест '+ vm.test.name + ' змінений');
                    $routeSegment.reload()
                } else {
                    NotificationService.error('Помилка:' + res.data.message);
                }
            });
        }
        
        function addTask() {
            ModalDialogService.addTaskModal(vm.test.id);
        }
    }
})();
