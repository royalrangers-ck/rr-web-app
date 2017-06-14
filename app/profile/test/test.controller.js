(() => {

    'use strict';

    angular
        .module('app')
        .controller('ProfileTestController', ProfileTestController);

    function ProfileTestController($routeSegment, $http, Endpoints, UserService, Constants, AppModalService, testResolve, $log, ProfileTestService, $location) {
        const vm = this;

        vm.test = {};
        vm.users = getUserMocks();
        vm.currentUser = UserService.get();
        vm.defaultImage = Constants.DEFAULT_IMG_SRC;
        vm.taskFormModal = AppModalService.taskFormModal;
        vm.startTest = startTest;

        activate();

        ///

        function activate() {
            getTest();
        }

        function getTest() {
            testResolve.$promise.then((res) => {
                if (res.success) {
                    vm.test = res.data;
                    $log.debug('Test loaded:', vm.test);
                }
            });
        }

        function startTest() {
            ProfileTestService.startTest({ "testId": vm.test.id })
                .$promise.then(() => {
                    $location.path('/profile/tests');
                });

        }
        function getUserMocks() {
            return {
                inProgress: [
                    { id: 1, name: 'Kalia Johnston', platoon: 'Platoon 1', date: '06.10.2017' },
                    { id: 2, name: 'Armen Tamzarian', platoon: 'Platoon 2', date: '15.08.2016' },
                    { id: 3, name: 'Ivan Vincent', platoon: 'Platoon 3', date: '19.02.2017' },
                    { id: 4, name: 'Oscar Davis', platoon: 'Platoon 4', date: '02.01.2017' },
                    { id: 5, name: 'Carl Gillespie', platoon: 'Platoon 5', date: '24.07.2016' }
                ],
                completed: [
                    { id: 6, name: 'Blythe Stokes', platoon: 'Platoon 6', date: '22.08.2016' },
                    { id: 7, name: 'Mechelle Gibbs', platoon: 'Platoon 7', date: '21.04.2017' },
                    { id: 8, name: 'Ruth Douglas', platoon: 'Platoon 8', date: '06.01.2018' },
                    { id: 9, name: 'Erin Morton', platoon: 'Platoon 9', date: '05.03.2017' },
                    { id: 10, name: 'Amber Gates', platoon: 'Platoon 10', date: '12.07.2016' },
                    { id: 11, name: 'Jared Head', platoon: 'Platoon 11', date: '14.04.2017' },
                    { id: 12, name: 'Isaiah Cabrera', platoon: 'Platoon 12', date: '10.02.2018' }
                ]
            }
        }
    }
})();
