(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmUsersController', ConfirmUsersController);
    ConfirmUsersController.$inject = ['growl', '$log', 'ConfirmUsersService'];

    //This controller allows administrator get, edit, approve or decline unapproved users
    //TODO: make use to getUsers(id) admin.platoonId instead of static id
    //TODO: confirm list of available fields for request to approve user
    //TODO: complete function to get list of Ranks from server
    //TODO: disable some ui elements before them content fully loaded
    //TODO: delete JSON.parse();
    //TODO: try to use angular modal instead of bootstrap ones
    //TODO: use new api to approve and decline users
    //TODO: move 'footable' script from view into controller
    function ConfirmUsersController(growl, $log, ConfirmUsersService) {
        $log.debug('Init ConfirmUsersController ...');

        //Set variables
        const vm = this;
        var editUserModal = '#EditUser';            //name of modal bootstrap window to edit user
        var confirmDeleteModal = '#ConfirmDelete';  //same, but to confirm decline user
        vm.usersList = [];
        vm.currentUser = {};
        vm.editUser = editUser;
        vm.getGroups = getGroups;
        vm.getPlatoons = getPlatoons;
        vm.getSections = getSections;
        vm.approveUser = approveUser;
        vm.declineUser = declineUser;
        vm.showConfirmDecline = showConfirmDecline;

        activate();

        ////

        function activate(){
            //Get list of unapproved users with same 'platoonId' as admin's
            getUsers(1);
        }

        //Function to set in 'vm' user list with specified platoonId
        function getUsers(grId) {
            ConfirmUsersService.getUsers({platoonId: grId}).$promise.then((res) => {
                if (res.success) {
                    var result;
                    result = JSON.parse(res.data.message);
                    result.forEach((item) => {
                        item.birthDate = new Date(item.birthDate);  //use 'new Data()' instead of raw int
                    });
                    vm.usersList = result;
                    $log.debug('Load users list:');
                    $log.debug(vm.usersList);
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
            $log.debug('Edit user:');
            $log.debug(vm.currentUser);
        }

        //Function to approve currentUser
        function approveUser() {
            $(editUserModal).modal('hide'); //immediately hide modal window to prevent double confirm
            var valuesToSend = {
                "firstName": vm.currentUser.firstName,
                "lastName": vm.currentUser.lastName,
                "gender": vm.currentUser.gender,
                "phoneNumber": vm.currentUser.phoneNumber,
                "birthDate": vm.currentUser.birthDate.getTime(),
                "cityId": vm.currentUser.cityId,
                "groupId": vm.currentUser.groupId,
                "platoonId": vm.currentUser.platoonId,
                "sectionId": vm.currentUser.sectionId,
                "rankId": vm.currentUser.rankId
            };
            ConfirmUsersService.approveUser({userId: vm.currentUser.id}, valuesToSend,
                (res) => {
                    if (res.success) {
                        growl.success('Користувач ' + vm.currentUser.firstName + ' ' +
                            vm.currentUser.lastName + ' підтверджений');
                        getUsers(1);
                    } else {
                        growl.error('Помилка:' + res.data.message);
                    }
                });
        }

        //Function to decline currentUser
        function declineUser() {
            $(confirmDeleteModal).modal('hide');    //prevent double decline
            $(editUserModal).modal('hide');         //also to prevent double decline
            ConfirmUsersService.declineUser({userId: vm.currentUser.id},
                (res) => {
                    if (res.success) {
                        growl.info('Користувач ' + vm.currentUser.firstName + ' ' +
                            vm.currentUser.lastName + ' видалений');
                        getUsers(1);
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
            ConfirmUsersService.city({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                }
            });
        }

        //function to set in 'vm' list of Groups by cityId
        function getGroups(cityId) {
            ConfirmUsersService.group({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    vm.groups = res.data;
                }
            });
        }

        //function to set in 'vm' list of Platoons by groupId
        function getPlatoons(groupId) {
            ConfirmUsersService.platoon({groupId: groupId}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                }
            });
        }

        //function to set in 'vm' list of Sections by platoonId
        function getSections(platoonId) {
            ConfirmUsersService.section({platoonId: platoonId}).$promise.then((res) => {
                if (res.success) {
                    vm.sections = res.data;
                }
            });
        }

        //function to set in 'vm' list of Ranks
        function getRanks() {
            vm.ranks = [
                {id: 2, name: 'Помічник'},
                {id: 3, name: 'Старший помічник'},
                {id: 1, name: 'Молодший помічник'}];
        }

        $log.debug('Init complete.');
    }
})();