(() => {

    'use strict';

    angular
        .module('app')
        .controller('TaskFormModalController', TaskFormModalController);

    function TaskFormModalController (currentTest, $uibModalInstance, $http, Endpoints, growl, $log) {
        const vm = this;

        vm.submit = submit;
        vm.close = close;

        ////

        function submit () {

            if (!vm.form || vm.form.$invalid) {
                return vm.form.$submitted = false;
            }

            let data = {
                name: vm.task.name,
                description: vm.task.description,
                testId: currentTest.id
            };

            $http.post(Endpoints.ACHIEVEMENTS_TASK, data).then((res) => {
                if (res.data.success) {
                    growl.success(res.data.data.message);
                    currentTest.taskList.push(data);
                    $uibModalInstance.close();
                } else {
                    growl.error(res.data.data.message);
                }
            });
        }

        function close(data) {
            $uibModalInstance.close(data);
        }
    }
})();
