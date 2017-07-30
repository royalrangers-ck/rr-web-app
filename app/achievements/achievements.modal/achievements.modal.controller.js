(() => {

    'use strict';

    angular
        .module('app')
        .controller('AchievementsModalController', AchievementsModalController);

    function AchievementsModalController ($uibModalInstance, ProfileTestsService) {
        const vm = this;

        vm.tests = [];
        vm.pagination = [];
        vm.close = close;
        vm.submit = submit;

        activate();

        ////

        function activate () {
            getTests();
        }

        function submit () {
            $log.debug('add new Test');
        }

        function close(data) {
            $uibModalInstance.close(data);
        }

        function getTests () {
            // ToDo.zpawn: get correct data
            ProfileTestsService.getTests().$promise.then(function (res) {
                if (res.success) {
                    vm.tests = res.data.content;
                    vm.pagination = res.data;
                }
            });
        }
    }
})();
