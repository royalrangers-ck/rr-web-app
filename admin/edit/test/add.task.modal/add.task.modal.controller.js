(() => {

    'use strict';

    angular
        .module('admin')
        .controller('AddTaskModalController', AddTaskModalController);

    function AddTaskModalController (NotificationService, $uibModalInstance, $routeSegment,TaskService, testId) {
        const vm = this;
        vm.newTask = {};
        vm.addTask = addTask;
        vm.close = close;

        activate();

        ///

        function activate() {
        }

        function addTask() {
            $uibModalInstance.close();
            let taskToSend = {
                "name": vm.newTask.name,
                "description": vm.newTask.description,
                "testId": testId
            };
            TaskService.createTask(taskToSend, (res) => {
                if (res.success) {
                    NotificationService.info('Завдання '+ vm.newTask.name + ' добавлено');
                    $routeSegment.reload()
                } else {
                    NotificationService.error('Помилка:' + res.data.message);
                }
            });
        }

        function close(data) {
            $uibModalInstance.close(data);
        }
    }
})();
