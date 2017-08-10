(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreateTestModalController', CreateTestModalController);

    function CreateTestModalController (NotificationService, $uibModalInstance, $routeSegment, testColors, TestService) {
        const vm = this;
        vm.newTest = {};
        vm.testColors = testColors;
        vm.createTest = createTest;
        vm.close = close;

        activate();

        ///

        function activate() {
        }

        function createTest() {
            $uibModalInstance.close();
            let valuesToSend = {
                "name": vm.newTest.name,
                "description": vm.newTest.description,
                "shortDescription": vm.newTest.shortDescription,
                "testType": vm.newTest.testType,
                "logoUrl": "static/vendor/images/demo/profile.7.jpg"
            };
            TestService.createTest(valuesToSend, (res) => {
                if (res.success) {
                    NotificationService.info('Тест '+ vm.newTest.name + ' створений');
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
