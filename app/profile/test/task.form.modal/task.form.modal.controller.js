(() => {

    'use strict';

    angular
        .module('app')
        .controller('TaskFormModalController', TaskFormModalController);

    function TaskFormModalController (currentTest, $uibModalInstance, NotificationService, ProfileTestFactory) {
        const vm = this;

        vm.submit = submit;
        vm.close = close;

        ////

        function submit () {

            if (!vm.form || vm.form.$invalid) {
                return vm.form.$submitted = false;
            }

            let req = {
                name: vm.task.name,
                description: vm.task.description,
                testId: currentTest.id
            };

            ProfileTestFactory.createTask(req, (res) => {
                if (res.success) {
                    NotificationService.success(res.data.message);
                    $uibModalInstance.close();

                    // ToDo.zpawn: push response task in taskList
                    currentTest.taskList.push(req);
                } else {
                    NotificationService.error(res.data.message);
                }
            });
        }

        function close(data) {
            $uibModalInstance.close(data);
        }
    }
})();
