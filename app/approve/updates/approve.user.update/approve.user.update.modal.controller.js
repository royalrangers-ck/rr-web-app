(() => {

    'use strict';

    angular
        .module('app')
        .controller('ApproveUserUpdateModalController', ApproveUserUpdateModalController);

    ApproveUserUpdateModalController.$inject = ['originalUser', 'modifiedUser', 'growl', '$uibModalInstance', 'UserFactory','PublicInfoFactory', '$routeSegment', 'Ranks'];
    function ApproveUserUpdateModalController (originalUser, modifiedUser, growl, $uibModalInstance, UserFactory, PublicInfoFactory, $routeSegment, Ranks) {
        const vm = this;

        vm.originalUser = {};
        vm.modifiedUser = modifiedUser;
        vm.tempUser = angular.copy(modifiedUser);

        vm.changeCountry = changeCountry;
        vm.changeRegion = changeRegion;
        vm.changeCity = changeCity;
        vm.changePlatoon = changePlatoon;
        vm.setSections = setSections;
        vm.approveUser = approveUser;
        vm.close = close;

        activate();

        ///

        function activate() {
            if (originalUser && originalUser.success) {
                vm.originalUser = originalUser.data;
            }

            setCountries();
            setRegions(vm.modifiedUser.country.id);
            setCities(vm.modifiedUser.region.id);
            setPlatoons(vm.modifiedUser.city.id);
            setSections(vm.modifiedUser.platoon.id);
            setRanks();
        }

        function approveUser() {
            growl.info('Користувач ' + vm.modifiedUser.firstName + ' ' +
                                        vm.modifiedUser.lastName + ' підтверджується...');
            let valuesToSend = {
                firstName: vm.modifiedUser.firstName,
                lastName: vm.modifiedUser.lastName,
                gender: vm.modifiedUser.gender,
                userAgeGroup: vm.modifiedUser.userAgeGroup,
                telephoneNumber: vm.modifiedUser.telephoneNumber,
                birthDate: +moment(vm.modifiedUser.birthDate),
                countryId: vm.modifiedUser.country.id,
                regionId: vm.modifiedUser.region.id,
                cityId: vm.modifiedUser.city.id,
                platoonId: vm.modifiedUser.platoon.id,
                sectionId: vm.modifiedUser.section.id,
                userRank: vm.modifiedUser.userRank
            };
            UserFactory.approveUpdateUser({temp_userId: vm.modifiedUser.id}, valuesToSend, (res) => {
                if (res.success) {
                    close();
                    growl.info('Користувач '+vm.modifiedUser.firstName+' '+vm.modifiedUser.lastName+' підтверджений');
                    $routeSegment.chain[0].reload();
                } else {
                    growl.error('Помилка:' + res.data.message);
                }
            });
        }
        function setCountries() {
            PublicInfoFactory.countries().$promise.then((res) => {
                if (res.success) {
                    vm.countries = res.data;
                }
            });
        }

        function setRegions(countryId) {
            if (countryId === null) return [];
            PublicInfoFactory.region({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.regions = res.data;
                }
            });
        }

        function setCities(regionId) {
            if (regionId === null) return [];
            PublicInfoFactory.city({regionId: regionId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                }
            });
        }

        function setPlatoons(cityId) {
            if (cityId === null) return [];
            PublicInfoFactory.platoon({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                }
            });
        }

        function setSections(platoonId) {
            if (platoonId === null) return [];
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
        }

        //Special function for view to correct change region
        function changeRegion() {
            setCities(vm.modifiedUser.region.id);
            vm.modifiedUser.city = {};
            vm.modifiedUser.platoon = {};
        }

        //Same, but to correct change city
        function changeCity() {
            setPlatoons(vm.modifiedUser.city.id);
            vm.modifiedUser.platoon = {};
        }

        //Same, but to correct change platoon
        function changePlatoon() {
            setSections(vm.modifiedUser.platoon.id);
        }

        function close(data) {
            $uibModalInstance.close(data);
        }
    }
})();





