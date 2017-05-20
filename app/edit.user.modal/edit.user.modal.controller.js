(() => {

    'use strict';

    angular
        .module('app')
        .controller('EditUserModalController', EditUserModalController);

    EditUserModalController.$inject = ['$log', 'growl', '$uibModalInstance', 'EditUserModalService', 'Constants', 'UserService', 'Ranks', 'AppModalService'];
    function EditUserModalController($log, growl, $uibModalInstance, EditUserModalService, Constants, UserService, Ranks, AppModalService) {
        const vm = this;

        vm.ranksNames = Ranks;
        vm.currentUser = getCurrentUser();
        vm.defaultImage = Constants.DEFAULT_IMG_SRC;

        vm.changeGroup = changeGroup;
        vm.changePlatoon = changePlatoon;
        vm.setSections = setSections;
        vm.updateUser = updateUser;
        vm.uploadUserLogo = uploadUserLogo;
        vm.close = close;

        activate();

        ///

        function getCurrentUser() {
            let currentUser = UserService.get();
            return angular.copy(currentUser, {});
        }

        function activate() {
            setCities(vm.currentUser.country.id);
            setGroups(vm.currentUser.city.id);
            setPlatoons(vm.currentUser.group.id);
            setSections(vm.currentUser.platoon.id);
            setRanks();
        }

        function updateUser() {
            close();

            let request = {
                firstName: vm.currentUser.firstName,
                lastName: vm.currentUser.lastName,
                gender: vm.currentUser.gender,
                userAgeGroup: vm.currentUser.userAgeGroup,
                telephoneNumber: vm.currentUser.telephoneNumber,
                birthDate: +moment(vm.currentUser.birthDate),
                countryId: vm.currentUser.country.id,
                cityId: vm.currentUser.city.id,
                groupId: vm.currentUser.group.id,
                platoonId: vm.currentUser.platoon.id,
                sectionId: vm.currentUser.section.id,
                userRank: vm.currentUser.userRank
            };

            EditUserModalService.updateUser(request, (res) => {
                if (res.success) {
                    growl.info('Дані відправлено на перевірку. Очікуйте підтвердження.');
                    window.location.reload();
                } else {
                    growl.error('Помилка:' + res.data.message);
                }
            });
        }

        function setCities(countryId) {
            if (countryId == null) return [];
            EditUserModalService.city({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                    $log.debug('Set citys list: ', res.data);
                }
            });
        }

        function setGroups(cityId) {
            if (cityId == null) return [];
            EditUserModalService.group({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.groups = res.data;
                    $log.debug('Set groups list: ', res.data);
                }
            });
        }

        function setPlatoons(groupId) {
            if (groupId == null) return [];
            EditUserModalService.platoon({groupId: groupId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                    $log.debug('Set platoons list: ', res.data);
                }
            });
        }

        function setSections(platoonId) {
            if (platoonId == null) return [];
            EditUserModalService.section({platoonId: platoonId}).$promise.then((res) => {
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

        function uploadUserLogo() {
            $uibModalInstance.close();
            AppModalService.uploadUserLogo({
                callback: AppModalService.editUserModal
            });
        }
    }
})();
