(() => {

    'use strict';

    angular
        .module('admin')
        .service('TaskService', TaskService);

    function TaskService(TaskFactory) {

        const vm = this;

        vm.getTasks = TaskFactory.get;
        vm.createTask = TaskFactory.save;
    }
})();
