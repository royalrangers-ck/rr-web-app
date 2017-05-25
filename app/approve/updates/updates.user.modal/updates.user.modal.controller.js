(() => {

    'use strict';

    angular
        .module('app')
        .controller('UpdatesUserModalController', UpdatesUserModalController);

    UpdatesUserModalController.$inject = ['$log', 'growl', '$uibModalInstance', 'currentUser', 'UpdatesUserModalService', '$routeSegment', 'Ranks'];
    function UpdatesUserModalController ($log, growl, $uibModalInstance, currentUser, UpdatesUserModalService, $routeSegment, Ranks) {
        const vm = this;
        const confirmDeleteModal = '#ConfirmDelete';

        vm.ranksNames = Ranks;
        vm.currentUser = currentUser;
        vm.changeGroup = changeGroup;
        vm.changePlatoon = changePlatoon;
        vm.setSections = setSections;
        vm.approveUser = approveCurrentUser;
        vm.declineUser = declineCurrentUser;
        vm.showConfirmDecline = showConfirmDecline;
        vm.close = close;

        activate();

        ///

        function activate() {
            $log.debug('Init modal window...')
            setCities(vm.currentUser.country.id);
            setGroups(vm.currentUser.city.id);
            setPlatoons(vm.currentUser.group.id);
            setSections(vm.currentUser.platoon.id);
            setRanks();
            $log.debug('User loaded to modal window:', vm.currentUser);
        }

        function approveCurrentUser() {
            close();
            growl.info('Користувач ' + vm.currentUser.firstName + ' ' +
                                        vm.currentUser.lastName + ' підтверджується...');
            let valuesToSend = {
                firstName: vm.currentUser.firstName,
                lastName: vm.currentUser.lastName,
                gender: vm.currentUser.gender,
                userAgeGroup: vm.currentUser.userAgeGroup,
                telephoneNumber: vm.currentUser.telephoneNumber,
                birthDate: vm.currentUser.birthDate.getTime(),
                countryId: vm.currentUser.country.id,
                cityId: vm.currentUser.city.id,
                groupId: vm.currentUser.group.id,
                platoonId: vm.currentUser.platoon.id,
                sectionId: vm.currentUser.section.id,
                userRank: vm.currentUser.userRank
            };
            UpdatesUserModalService.approveUser({"ids": [vm.currentUser.id]},
                (res) => {
                    if (res.success) {
                        UpdatesUserModalService.updateUser({userId: vm.currentUser.id}, valuesToSend,
                            (res) => {
                                if (res.success) {
                                    growl.info('Користувач ' + vm.currentUser.firstName + ' ' +
                                        vm.currentUser.lastName + ' підтверджений');
                                    $routeSegment.chain[0].reload();
                                } else {
                                    growl.error('Помилка:' + res.data.message);
                                }
                            });
                    } else {
                        growl.error('Помилка:' + res.data.message);
                    }
                });
        }

        function declineCurrentUser() {
            close();
            growl.info('Користувач ' + vm.currentUser.firstName + ' ' +
                                        vm.currentUser.lastName + ' видаляється...');
            UpdatesUserModalService.declineUser({"ids": [vm.currentUser.id]},
                (res) => {
                    if (res.success) {
                        growl.info('Користувач ' + vm.currentUser.firstName + ' ' +
                            vm.currentUser.lastName + ' видалений');
                        $routeSegment.chain[0].reload();
                    } else {
                        growl.error('Помилка:' + res.data.message);
                    }
                });
        }

        //This additional function needed just to create another modal with 'confirm decline user'
        function showConfirmDecline() {
            $(confirmDeleteModal).modal();
        }

        function setCities(countryId) {
            if (countryId == null) return [];
            UpdatesUserModalService.city({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                    $log.debug('Set citys list: ', res.data);
                }
            });
        }

        function setGroups(cityId) {
            if (cityId == null) return [];
            UpdatesUserModalService.group({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.groups = res.data;
                    $log.debug('Set groups list: ', res.data);
                }
            });
        }

        function setPlatoons(groupId) {
            if (groupId == null) return [];
            UpdatesUserModalService.platoon({groupId: groupId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                    $log.debug('Set platoons list: ', res.data);
                }
            });
        }

        function setSections(platoonId) {
            if (platoonId == null) return [];
            UpdatesUserModalService.section({platoonId: platoonId}).$promise.then((res) => {
                if (res.success) {
                    vm.sections = res.data;
                    $log.debug('Set sections list: ', res.data);
                }
            });
        }

        function setRanks() {
            UpdatesUserModalService.rank().$promise.then((res) => {
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
            $(confirmDeleteModal).modal('hide');
        }

    }
})();




