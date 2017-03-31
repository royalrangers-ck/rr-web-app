(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmUsersController', ConfirmUsersController);
    ConfirmUsersController.$inject = ['$rootScope', 'growl', '$log', '$route', 'ConfirmUsersService'];

    //This controller allows administrator get, edit, approve or decline unapproved users
    //TODO: make use to getUsers(id) admin.platoonId instead of static id
    //TODO: use function to reload controller after decline or approve user
    //TODO: try to use angular modal instead of bootstrap ones
    //TODO: test api to approve and decline users
    //TODO: use api to update user data
    //TODO: delete all comments
    function ConfirmUsersController($rootScope, growl, $log, $route, ConfirmUsersService) {
        //Set variables
        const vm = this;
        const editUserModal = '#EditUser';            //name of modal window to edit user
        const confirmDeleteModal = '#ConfirmDelete';  //same, but to confirm decline user
        vm.usersList = [];
        vm.currentUser = {};
        vm.editUser = editUser;
        vm.changeGroup = changeGroup;
        vm.changePlatoon = changePlatoon;
        vm.getSections = getSections;
        vm.approveUser = approveUser;
        vm.declineUser = declineUser;
        vm.showConfirmDecline = showConfirmDecline;

        activate();

        ////

        function activate() {
            $log.debug('Init ConfirmUsersController ...');
            //Get list of unapproved users with same 'platoonId' as admin's
            getUsers(1);
            //init "FooTable" plugin in all tables with 'footable' class
            $(document).ready(function () {
                $('.footable').footable();
            });
            $log.debug('Init complete.');
        }

        //Function to set in 'vm' user list with specified platoonId
        function getUsers(grId) {
            ConfirmUsersService.getUsers({platoonId: grId}).$promise.then((res) => {
                if (res.success) {
                    let result;
                    result = res.data || [];
                    result.forEach((item) => {
                        item.birthDate = new Date(item.birthDate);  //use 'new Data()' instead of raw int
                    });
                    vm.usersList = result;
                    $log.debug('Load users list:', vm.usersList);
                }
            });
        }

        //Function to edit currentUser
        function editUser(id) {
            vm.currentUser = vm.usersList.find((item) => item.id == id) || {};
            getCities(vm.currentUser.countryId);
            getGroups(vm.currentUser.cityId);
            getPlatoons(vm.currentUser.groupId);
            getSections(vm.currentUser.platoonId);
            getRanks();
            $(editUserModal).modal();       //load modal window in view (maybe incorrect)
            $log.debug('Edit user:', vm.currentUser);
        }

        //Function to approve currentUser
        function approveUser() {
            $(editUserModal).modal('hide'); //immediately hide modal window to prevent double confirm
            let valuesToSend = {
                firstName: vm.currentUser.firstName,
                lastName: vm.currentUser.lastName,
                gender: vm.currentUser.gender,
                telephoneNumber: vm.currentUser.telephoneNumber,
                birthDate: vm.currentUser.birthDate.getTime(),
                cityId: vm.currentUser.cityId,
                groupId: vm.currentUser.groupId,
                platoonId: vm.currentUser.platoonId,
                sectionId: vm.currentUser.sectionId,
                userRank: vm.currentUser.userRank
            };
            ConfirmUsersService.approveUser([vm.currentUser.id],
                (res) => {
                    if (res.success) {
                        growl.success('Користувач ' + vm.currentUser.firstName + ' ' +
                            vm.currentUser.lastName + ' підтверджений');
                    } else {
                        growl.error('Помилка:' + res.data.message);
                    }
                });
            ConfirmUsersService.updateUser({userId: vm.currentUser.id}, valuesToSend,
                (res) => {
                    if (res.success) {
                        growl.success('Користувач ' + vm.currentUser.firstName + ' ' +
                            vm.currentUser.lastName + ' підтверджений');
                        // $route.reload();
                    } else {
                        growl.error('Помилка:' + res.data.message);
                    }
                });
        }

        //Function to decline currentUser
        function declineUser() {
            $(confirmDeleteModal).modal('hide');    //prevent double decline
            $(editUserModal).modal('hide');         //also to prevent double decline
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

        //function to set in 'vm' list of Cities by countryId
        function getCities(countryId) {
            if (countryId == null) return [];
            ConfirmUsersService.city({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                    $log.debug('Set citys list: ', res.data);
                }
            });
        }

        //function to set in 'vm' list of Groups by cityId
        function getGroups(cityId) {
            if (cityId == null) return [];
            ConfirmUsersService.group({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.groups = res.data;
                    $log.debug('Set groups list: ', res.data);
                }
            });
        }

        //function to set in 'vm' list of Platoons by groupId
        function getPlatoons(groupId) {
            if (groupId == null) return [];
            ConfirmUsersService.platoon({groupId: groupId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                    $log.debug('Set platoons list: ', res.data);
                }
            });
        }

        //function to set in 'vm' list of Sections by platoonId
        function getSections(platoonId) {
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
            getGroups(cityId);
            vm.platoons = [];
            vm.sections = [];
        }

        //Same, but to correct change platoon
        function changePlatoon(groupId) {
            getPlatoons(groupId);
            vm.sections = [];
        }

        //function to set in 'vm' list of Ranks
        function getRanks() {
            ConfirmUsersService.rank().$promise.then((res) => {
                if (res.success) {
                    vm.ranks = res.data;
                    $log.debug('Set ranks list: ', res.data);
                }
            });
        }
    }
})();