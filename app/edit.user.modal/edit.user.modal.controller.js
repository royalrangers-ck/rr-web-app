(() => {

    'use strict';

    angular
        .module('app')
        .controller('EditUserModalController', EditUserModalController);

    EditUserModalController.$inject = ['$log', 'growl', '$uibModalInstance', 'EditUserModalService', '$routeSegment', 'user'];
    function EditUserModalController($log, growl, $uibModalInstance, EditUserModalService, $routeSegment, user) {
        const vm = this;

        vm.currentUser = {};
        vm.changeGroup = changeGroup;
        vm.changePlatoon = changePlatoon;
        vm.setSections = setSections;
        vm.updateUser = updateUser;
        vm.close = close;

        activate();

        ///

        function activate() {
            $log.debug('Init modal window...');
            angular.copy(user, vm.currentUser);
            setCities(vm.currentUser.countryId);
            setGroups(vm.currentUser.cityId);
            setPlatoons(vm.currentUser.groupId);
            setSections(vm.currentUser.platoonId);
            setRanks();
            $log.debug('User loaded to modal window:', vm.currentUser);
        }

        function updateUser() {
            close();
            let valuesToSend = {
                firstName: vm.currentUser.firstName,
                lastName: vm.currentUser.lastName,
                gender: vm.currentUser.gender,
                userAgeGroup: vm.currentUser.userAgeGroup,
                telephoneNumber: vm.currentUser.telephoneNumber,
                birthDate: +moment(vm.currentUser.birthDate),
                countryId: vm.currentUser.countryId,
                cityId: vm.currentUser.cityId,
                groupId: vm.currentUser.groupId,
                platoonId: vm.currentUser.platoonId,
                sectionId: vm.currentUser.sectionId,
                userRank: vm.currentUser.userRank,
                status: vm.currentUser.status
            };
            EditUserModalService.updateUser({ userId: vm.currentUser.id }, valuesToSend,
                (res) => {
                    if (res.success) {
                        growl.info('Дані оновлено');
                        window.location.reload();
                    } else {
                        growl.error('Помилка:' + res.data.message);
                    }
                });
        }

        function setCities(countryId) {
            if (countryId == null) return [];
            EditUserModalService.city({ countryId: countryId }).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                    $log.debug('Set citys list: ', res.data);
                }
            });
        }

        function setGroups(cityId) {
            if (cityId == null) return [];
            EditUserModalService.group({ cityId: cityId }).$promise.then((res) => {
                if (res.success) {
                    vm.groups = res.data;
                    $log.debug('Set groups list: ', res.data);
                }
            });
        }

        function setPlatoons(groupId) {
            if (groupId == null) return [];
            EditUserModalService.platoon({ groupId: groupId }).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                    $log.debug('Set platoons list: ', res.data);
                }
            });
        }

        function setSections(platoonId) {
            if (platoonId == null) return [];
            EditUserModalService.section({ platoonId: platoonId }).$promise.then((res) => {
                if (res.success) {
                    vm.sections = res.data;
                    $log.debug('Set sections list: ', res.data);
                }
            });
        }

        function setRanks() {
            EditUserModalService.rank().$promise.then((res) => {
                if (res.success) {
                    vm.ranks = res.data;
                    $log.debug('Set ranks list: ', res.data);
                }
            });
        }

        //Special function for view to correct change group
        function changeGroup(cityId) {
            setGroups(cityId);
            vm.platoons = [];
            vm.sections = [];
        }

        //Same, but to correct change platoon
        function changePlatoon(groupId) {
            setPlatoons(groupId);
            vm.sections = [];
        }

        function close(data) {
            $uibModalInstance.close(data);
        }

    }
})();





