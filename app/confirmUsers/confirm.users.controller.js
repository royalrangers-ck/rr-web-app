(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmUsersController', ConfirmUsersController);
    ConfirmUsersController.$inject = ['$rootScope', 'growl', '$log', '$route', 'ConfirmUsersService'];

    //TODO: find answer - why $route.reload() doesn't work
    //TODO: try to use angular modal instead of bootstrap ones
    function ConfirmUsersController($rootScope, growl, $log, $route, ConfirmUsersService) {
        const vm = this;
        const editUserModal = '#EditUser';            //name of modal window to edit user
        const confirmDeleteModal = '#ConfirmDelete';  //same, but to confirm decline user
        vm.usersList = [];
        vm.currentUser = {};
        vm.editUser = editCurrentUser;
        vm.changeGroup = changeGroup;
        vm.changePlatoon = changePlatoon;
        vm.getSections = setSections;
        vm.approveUser = approveCurrentUser;
        vm.declineUser = declineCurrentUser;
        vm.showConfirmDecline = showConfirmDecline;

        activate();

        ////

        function activate() {
            $log.debug('Init ConfirmUsersController ...');
            getUsers($rootScope.currentUser.platoon);
            //init "FooTable" plugin in all tables with 'footable' class
            $(document).ready(function () {
                $('.footable').footable();
            });
            $log.debug('Init complete.');
        }

        function getUsers(platoonName) {
            ConfirmUsersService.allPlatoons().$promise.then((res) => {
                if (res.success) {
                    let platoonId = res.data.find((item) => item.name == platoonName).id;
                    ConfirmUsersService.getUsers({platoonId: platoonId}).$promise.then((res) => {
                        if (res.success) {
                            let result;
                            result = res.data || [];
                            result.forEach((item) => {
                                item.birthDate = new Date(item.birthDate);
                            });
                            vm.usersList = result;
                            $log.debug('Load users list:', vm.usersList);
                        }
                    });
                }
            });

        }

        function editCurrentUser(id) {
            vm.currentUser = vm.usersList.find((item) => item.id == id) || {};
            setCities(vm.currentUser.countryId);
            setGroups(vm.currentUser.cityId);
            setPlatoons(vm.currentUser.groupId);
            setSections(vm.currentUser.platoonId);
            setRanks();
            $(editUserModal).modal();
            $log.debug('Edit user:', vm.currentUser);
        }

        function approveCurrentUser() {
            $(editUserModal).modal('hide');
            let valuesToSend = {
                firstName: vm.currentUser.firstName,
                lastName: vm.currentUser.lastName,
                gender: vm.currentUser.gender,
                userAgeGroup: vm.currentUser.userAgeGroup,
                telephoneNumber: vm.currentUser.telephoneNumber,
                birthDate: vm.currentUser.birthDate.getTime(),
                countryId: vm.currentUser.countryId,
                cityId: vm.currentUser.cityId,
                groupId: vm.currentUser.groupId,
                platoonId: vm.currentUser.platoonId,
                sectionId: vm.currentUser.sectionId,
                userRank: vm.currentUser.userRank
            };
            ConfirmUsersService.approveUser([vm.currentUser.id],
                (res) => {
                    if (res.success) {
                        ConfirmUsersService.updateUser({userId: vm.currentUser.id}, valuesToSend,
                            (res) => {
                                if (res.success) {
                                    growl.info('Користувач ' + vm.currentUser.firstName + ' ' +
                                        vm.currentUser.lastName + ' підтверджений');
                                    $route.reload();
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
            $(confirmDeleteModal).modal('hide');
            $(editUserModal).modal('hide');
            ConfirmUsersService.declineUser([vm.currentUser.id],
                (res) => {
                    if (res.success) {
                        growl.info('Користувач ' + vm.currentUser.firstName + ' ' +
                            vm.currentUser.lastName + ' видалений');
                        $route.reload();
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
            ConfirmUsersService.city({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                    $log.debug('Set citys list: ', res.data);
                }
            });
        }

        function setGroups(cityId) {
            if (cityId == null) return [];
            ConfirmUsersService.group({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.groups = res.data;
                    $log.debug('Set groups list: ', res.data);
                }
            });
        }

        function setPlatoons(groupId) {
            if (groupId == null) return [];
            ConfirmUsersService.platoon({groupId: groupId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                    $log.debug('Set platoons list: ', res.data);
                }
            });
        }

        function setSections(platoonId) {
            if (platoonId == null) return [];
            ConfirmUsersService.section({platoonId: platoonId}).$promise.then((res) => {
                if (res.success) {
                    vm.sections = res.data;
                    $log.debug('Set sections list: ', res.data);
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

        function setRanks() {
            ConfirmUsersService.rank().$promise.then((res) => {
                if (res.success) {
                    vm.ranks = res.data;
                    $log.debug('Set ranks list: ', res.data);
                }
            });
        }
    }
})();