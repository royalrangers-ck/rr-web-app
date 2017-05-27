(() => {

    'use strict';

    angular
        .module('app')
        .controller('EditUserModalController', EditUserModalController);

    EditUserModalController.$inject = ['$log', 'growl', '$uibModalInstance', 'currentUser', 'UserFactory', 'PublicInfoFactory', 'Constants', 'Ranks', 'AppModalService'];
    function EditUserModalController($log, growl, $uibModalInstance, currentUser, UserFactory, PublicInfoFactory, Constants, Ranks, AppModalService) {
        const vm = this;

        vm.modifiedUser = angular.copy(currentUser);
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


        function activate() {
            setCountries();
            setRegions(vm.modifiedUser.country.id);
            setCities(vm.modifiedUser.region.id);
            setPlatoons(vm.modifiedUser.city.id);
            setSections(vm.modifiedUser.platoon.id);
            setRanks();
        }

        function updateUser() {
            let request = {
                firstName: vm.modifiedUser.firstName,
                lastName: vm.modifiedUser.lastName,
                gender: vm.modifiedUser.gender,
                userAgeGroup: vm.modifiedUser.userAgeGroup,
                telephoneNumber: vm.modifiedUser.telephoneNumber,
                birthDate: +moment(vm.modifiedUser.birthDate),
                countryId: vm.modifiedUser.country && vm.modifiedUser.country.id,
                regionId: vm.modifiedUser.region && vm.modifiedUser.country.id,
                cityId: vm.modifiedUser.city && vm.modifiedUser.country.id,
                platoonId: vm.modifiedUser.platoon && vm.modifiedUser.country.id,
                sectionId: vm.modifiedUser.section && vm.modifiedUser.section.id,
                userRank: vm.modifiedUser.userRank,
            };

            let originalData = {
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                gender: currentUser.gender,
                userAgeGroup: currentUser.userAgeGroup,
                telephoneNumber: currentUser.telephoneNumber,
                birthDate: currentUser.birthDate,
                countryId: currentUser.country && currentUser.country.id,
                regionId: currentUser.region && currentUser.country.id,
                cityId: currentUser.city && currentUser.country.id,
                platoonId: currentUser.platoon && currentUser.country.id,
                sectionId: currentUser.section && currentUser.section.id,
                userRank: currentUser && currentUser.userRank,
            };

            if (!angular.equals(request,originalData)) {
                UserFactory.updateUser(request, (res) => {
                    if (res.success) {
                        close();
                        growl.info('Дані відправлено на перевірку. Очікуйте підтвердження.');
                    } else {
                        growl.error('Помилка:' + res.data.message);
                    }
                });
            } else {
                close();
            }
        }

        function setCountries() {
            PublicInfoFactory.countries().$promise.then((res) => {
                if (res.success) {
                    vm.countries = res.data;
                }
            });
        }

        function setRegions(countryId) {
            if (countryId == null) return [];
            PublicInfoFactory.region({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.regions = res.data;
                }
            });
        }

        function setCities(regionId) {
            if (regionId == null) return [];
            PublicInfoFactory.city({regionId: regionId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                }
            });
        }

        function setPlatoons(cityId) {
            if (cityId == null) return [];
            PublicInfoFactory.platoon({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                }
            });
        }

        function setSections(platoonId) {
            if (platoonId == null) return [];
            PublicInfoFactory.section({platoonId: platoonId}).$promise.then((res) => {
                if (res.success) {
                    vm.sections = res.data;
                }
            });
        }

        function setRanks() {
            PublicInfoFactory.rank().$promise.then((res) => {
                if (res.success) {
                    vm.ranks = res.data.reduce((ranks, rank) => {
                        ranks.push({
                            value: rank,
                            name: Ranks[rank]
                        });
                        return ranks;
                    }, []);
                }
            });
        }

        //Special function for view to correct change country
        function changeCountry() {
            setRegions(vm.modifiedUser.country.id);
            vm.modifiedUser.region = {};
            vm.modifiedUser.city = {};
            vm.modifiedUser.platoon = {};
            vm.modifiedUser.section = {};
        }

        //Special function for view to correct change region
        function changeRegion() {
            setCities(vm.modifiedUser.region.id);
            vm.modifiedUser.city = {};
            vm.modifiedUser.platoon = {};
            vm.modifiedUser.section = {};
        }

        //Same, but to correct change city
        function changeCity() {
            setPlatoons(vm.modifiedUser.city.id);
            vm.modifiedUser.platoon = {};
            vm.modifiedUser.section = {};
        }

        //Same, but to correct change platoon
        function changePlatoon() {
            setSections(vm.modifiedUser.platoon.id);
            vm.modifiedUser.section = {};
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
