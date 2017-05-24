(() => {

    'use strict';

    angular
        .module('app')
        .controller('ApproveUserUpdatesModalController', ApproveUserUpdatesModalController);

    ApproveUserUpdatesModalController.$inject = ['originalUser', 'modifiedUser', 'growl', '$uibModalInstance', 'User', '$routeSegment', 'Ranks'];
    function ApproveUserUpdatesModalController (originalUserResponse, modifiedUser, growl, $uibModalInstance, User, $routeSegment, Ranks) {
        const vm = this;
        const confirmDeleteModal = '#ConfirmDelete';

        vm.originalUser = {};
        vm.modifiedUser = modifiedUser;

        vm.changeCountry = changeCountry;
        vm.changeRegion = changeRegion;
        vm.changeCity = changeCity;
        vm.changePlatoon = changePlatoon;
        vm.setSections = setSections;
        vm.approveUser = approveCurrentUser;
        vm.declineUser = declineCurrentUser;
        vm.showConfirmDecline = showConfirmDecline;
        vm.close = close;

        activate();

        ///

        function activate() {
            if (originalUserResponse && originalUserResponse.success) {
                vm.originalUser = originalUserResponse.data;
            }

            setCountries();
            setRegions(vm.modifiedUser.country.id);
            setCities(vm.modifiedUser.region.id);
            setPlatoons(vm.modifiedUser.city.id);
            setSections(vm.modifiedUser.platoon.id);
            setRanks();
        }

        function approveCurrentUser() {
            close();
            growl.info('Користувач ' + vm.modifiedUser.firstName + ' ' +
                                        vm.modifiedUser.lastName + ' підтверджується...');
            let valuesToSend = {
                firstName: vm.modifiedUser.firstName,
                lastName: vm.modifiedUser.lastName,
                gender: vm.modifiedUser.gender,
                userAgeGroup: vm.modifiedUser.userAgeGroup,
                telephoneNumber: vm.modifiedUser.telephoneNumber,
                birthDate: vm.modifiedUser.birthDate.getTime(),
                countryId: vm.modifiedUser.country.id,
                cityId: vm.modifiedUser.city.id,
                groupId: vm.modifiedUser.group.id,
                platoonId: vm.modifiedUser.platoon.id,
                sectionId: vm.modifiedUser.section.id,
                userRank: vm.modifiedUser.userRank
            };
            User.approveUser({"ids": [vm.modifiedUser.id]},
                (res) => {
                    if (res.success) {
                        User.updateUser({userId: vm.modifiedUser.id}, valuesToSend,
                            (res) => {
                                if (res.success) {
                                    growl.info('Користувач ' + vm.modifiedUser.firstName + ' ' +
                                        vm.modifiedUser.lastName + ' підтверджений');
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
            growl.info('Користувач ' + vm.modifiedUser.firstName + ' ' +
                                        vm.modifiedUser.lastName + ' видаляється...');
            User.declineUser({"ids": [vm.modifiedUser.id]},
                (res) => {
                    if (res.success) {
                        growl.info('Користувач ' + vm.modifiedUser.firstName + ' ' +
                            vm.modifiedUser.lastName + ' видалений');
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

        function setCountries() {
            User.countries().$promise.then((res) => {
                if (res.success) {
                    vm.countries = res.data;
                }
            });
        }

        function setRegions(countryId) {
            if (countryId === null) return [];
            User.region({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.regions = res.data;
                }
            });
        }

        function setCities(regionId) {
            if (regionId === null) return [];
            User.city({regionId: regionId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                }
            });
        }

        function setPlatoons(cityId) {
            if (cityId === null) return [];
            User.platoon({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                }
            });
        }

        function setSections(platoonId) {
            if (platoonId === null) return [];
            User.section({platoonId: platoonId}).$promise.then((res) => {
                if (res.success) {
                    vm.sections = res.data;
                }
            });
        }

        function setRanks() {
            User.rank().$promise.then((res) => {
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
            $(confirmDeleteModal).modal('hide');
        }
    }
})();





