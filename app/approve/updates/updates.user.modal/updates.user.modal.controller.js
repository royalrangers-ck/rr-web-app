(() => {

    'use strict';

    angular
        .module('app')
        .controller('UpdatesUserModalController', UpdatesUserModalController);

    UpdatesUserModalController.$inject = ['$log', 'growl', '$uibModalInstance', 'currentUser', 'UpdatesUserModalService', '$routeSegment', 'Ranks'];
    function UpdatesUserModalController ($log, growl, $uibModalInstance, currentUser, UpdatesUserModalService, $routeSegment, Ranks) {
        const vm = this;
        const confirmDeleteModal = '#ConfirmDelete';

        vm.currentUser = currentUser;

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
            $log.debug('Init modal window...')
            setCountries();
            setRegions(vm.currentUser.country.id);
            setCities(vm.currentUser.region.id);
            setPlatoons(vm.currentUser.city.id);
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

        function setCountries() {
            UpdatesUserModalService.countries().$promise.then((res) => {
                if (res.success) {
                    vm.countries = res.data;
                    $log.debug('Set countries list: ', res.data);
                }
            });
        }

        function setRegions(countryId) {
            if (countryId === null) return [];
            UpdatesUserModalService.region({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.regions = res.data;
                    $log.debug('Set regions list: ', res.data);
                }
            });
        }

        function setCities(regionId) {
            if (regionId === null) return [];
            UpdatesUserModalService.city({regionId: regionId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                    $log.debug('Set cities list: ', res.data);
                }
            });
        }

        function setPlatoons(cityId) {
            if (cityId === null) return [];
            UpdatesUserModalService.platoon({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                    $log.debug('Set platoons list: ', res.data);
                }
            });
        }

        function setSections(platoonId) {
            if (platoonId === null) return [];
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
            $(confirmDeleteModal).modal('hide');
        }
    }
})();





