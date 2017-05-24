(() => {

    'use strict';

    angular
        .module('app')
        .controller('ApproveUserRegistrationModalController', ApproveUserRegistrationModalController);

    ApproveUserRegistrationModalController.$inject = ['$log', 'growl', '$uibModalInstance', 'currentUser', 'User', 'PublicInfo', '$routeSegment', 'Ranks'];
    function ApproveUserRegistrationModalController ($log, growl, $uibModalInstance, currentUser, User, PublicInfo, $routeSegment, Ranks) {
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
            $log.debug('Init modal window...');
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
                birthDate: vm.currentUser.birthDate,
                countryId: vm.currentUser.country.id,
                regionId: vm.currentUser.region.id,
                cityId: vm.currentUser.city.id,
                platoonId: vm.currentUser.platoon.id,
                sectionId: vm.currentUser.section.id,
                userRank: vm.currentUser.userRank
            };

            User.approveRegistrationUser({userId: vm.currentUser.id}, valuesToSend, (res) => {
                if (res.success) {
                    $routeSegment.chain[0].reload();
                    growl.info('Користувач ' + vm.currentUser.firstName + ' ' +
                        vm.currentUser.lastName + ' підтверджений');
                } else {
                    growl.error('Помилка:' + res.data.message);
                }
            });
        }

        function declineCurrentUser() {
            close();
            growl.info('Користувач ' + vm.currentUser.firstName + ' ' +
                                        vm.currentUser.lastName + ' видаляється...');
            User.rejectRegistrationUser({userId: vm.currentUser.id}, null ,(res) => {
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
            PublicInfo.countries().$promise.then((res) => {
                if (res.success) {
                    vm.countries = res.data;
                    $log.debug('Set countries list: ', res.data);
                }
            });
        }

        function setRegions(countryId) {
            if (countryId == null) return [];
            PublicInfo.region({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.regions = res.data;
                    $log.debug('Set regions list: ', res.data);
                }
            });
        }

        function setCities(regionId) {
            if (regionId == null) return [];
            PublicInfo.city({regionId: regionId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                    $log.debug('Set cities list: ', res.data);
                }
            });
        }

        function setPlatoons(cityId) {
            if (cityId == null) return [];
            PublicInfo.platoon({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                    $log.debug('Set platoons list: ', res.data);
                }
            });
        }

        function setSections(platoonId) {
            if (platoonId === null) return [];
            PublicInfo.section({platoonId: platoonId}).$promise.then((res) => {
                if (res.success) {
                    vm.sections = res.data;
                    $log.debug('Set sections list: ', res.data);
                }
            });
        }

        function setRanks() {
            PublicInfo.rank().$promise.then((res) => {
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





