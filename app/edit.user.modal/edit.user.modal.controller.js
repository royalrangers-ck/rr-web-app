(() => {

    'use strict';

    angular
        .module('app')
        .controller('EditUserModalController', EditUserModalController);

    function EditUserModalController($log, growl, $uibModalInstance, EditUserModalService, Constants, UserService, Ranks, AppModalService) {
        const vm = this;

        vm.currentUser = getCurrentUser();
        vm.defaultImage = Constants.DEFAULT_IMG_SRC;

        vm.changeCountry = changeCountry;
        vm.changeRegion = changeRegion;
        vm.changeCity = changeCity;
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
            setCountries();
            setRegions(vm.currentUser.country.id);
            setCities(vm.currentUser.region.id);
            setPlatoons(vm.currentUser.city.id);
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
                regionId: vm.currentUser.region.id,
                cityId: vm.currentUser.city.id,
                platoonId: vm.currentUser.platoon.id,
                sectionId: vm.currentUser.section.id,
                userRank: vm.currentUser.userRank,
            };

            EditUserModalService.updateUser(request, (res) => {
                if (res.success) {
                    growl.info('Дані відправлено на перевірку. Очікуйте підтвердження.');
                } else {
                    growl.error('Помилка:' + res.data.message);
                }
            });
        }

        function setCountries() {
            EditUserModalService.countries().$promise.then((res) => {
                if (res.success) {
                    vm.countries = res.data;
                    $log.debug('Set countries list: ', res.data);
                }
            });
        }

        function setRegions(countryId) {
            if (countryId === null) return [];
            EditUserModalService.region({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.regions = res.data;
                    $log.debug('Set regions list: ', res.data);
                }
            });
        }

        function setCities(regionId) {
            if (regionId === null) return [];
            EditUserModalService.city({regionId: regionId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                    $log.debug('Set cities list: ', res.data);
                }
            });
        }

        function setPlatoons(cityId) {
            if (cityId === null) return [];
            EditUserModalService.platoon({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                    $log.debug('Set platoons list: ', res.data);
                }
            });
        }

        function setSections(platoonId) {
            if (platoonId === null) return [];
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
                    vm.ranks = res.data.reduce((ranks, rank) => {
                        ranks.push({
                            value: rank,
                            name: Ranks[rank]
                        });
                        return ranks;
                    }, []);
                    $log.debug('Set ranks list: ', vm.ranks);
                }
            });
        }

        //Special function for view to correct change country
        function changeCountry() {
            setRegions(vm.currentUser.country.id);
            vm.currentUser.region = {};
            vm.currentUser.city = {};
            vm.currentUser.platoon = {};
        }

        //Special function for view to correct change region
        function changeRegion() {
            setCities(vm.currentUser.region.id);
            vm.currentUser.city = {};
            vm.currentUser.platoon = {};
        }

        //Same, but to correct change city
        function changeCity() {
            setPlatoons(vm.currentUser.city.id);
            vm.currentUser.platoon = {};
        }

        //Same, but to correct change platoon
        function changePlatoon() {
            setSections(vm.currentUser.platoon.id);
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
