(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmUsersController', ConfirmUsersController);
    ConfirmUsersController.$inject = ['$scope', 'growl', '$log', 'ConfirmUsersService'];

    //This controller allows administrator get, edit, approve or decline unapproved users
    //TODO: make use to getUsers(id) admin.platoonId instead of static id
    //TODO: confirm list of available fields for request to approve user
    //TODO: complete function to get list of Ranks from server
    //TODO: disable some ui elements before them content fully loaded
    //TODO: delete JSON.parse();
    //TODO: use vm instead of $scope;
    //TODO: try to use angular modal instead of bootstrap ones
    //TODO: use new api to approve and decline users
    function ConfirmUsersController($scope, growl, $log, ConfirmUsersService) {
        $log.debug('Init ConfirmUsersController ...');

        //Set variables
        const vm = this;
        var editUserModal = '#EditUser';            //name of modal bootstrap window to edit user
        var confirmDeleteModal = '#ConfirmDelete';  //same, but to confirm decline user
        $scope.usersList = [];
        $scope.currentUser = {};
        $scope.editUser = editUser;
        $scope.getGroups = getGroups;
        $scope.getPlatoons = getPlatoons;
        $scope.getSections = getSections;
        $scope.approveUser = approveUser;
        $scope.declineUser = declineUser;
        $scope.showConfirmDecline = showConfirmDecline;

        activate();

        ////

        function activate(){
            //Get list of unapproved users with same 'platoonId' as admin's
            getUsers(1);
        }

        //Function to set in $scope user list with specified platoonId
        function getUsers(grId) {
            ConfirmUsersService.getUsers({platoonId: grId}).$promise.then((res) => {
                if (res.success) {
                    var result;
                    result = JSON.parse(res.data.message);
                    result.forEach((item) => {
                        item.birthDate = new Date(item.birthDate);  //use 'new Data()' instead of raw int
                    });
                    $scope.usersList = result;
                    $log.debug('Load users list:');
                    $log.debug($scope.usersList);
                }
            });
        }

        //Function to edit currentUser
        function editUser(id) {
            $scope.currentUser = $scope.usersList.find((item) => item.id == id) || {};
            getCities($scope.currentUser.countryId);
            getGroups($scope.currentUser.cityId);
            getPlatoons($scope.currentUser.groupId);
            getSections($scope.currentUser.platoonId);
            getRanks();
            $(editUserModal).modal();       //load modal window in view (maybe incorrect)
            $log.debug('Edit user:');
            $log.debug($scope.currentUser);
        }

        //Function to approve currentUser
        function approveUser() {
            $(editUserModal).modal('hide'); //immediately hide modal window to prevent double confirm
            var valuesToSend = {
                "firstName": $scope.currentUser.firstName,
                "lastName": $scope.currentUser.lastName,
                "gender": $scope.currentUser.gender,
                "phoneNumber": $scope.currentUser.phoneNumber,
                "birthDate": $scope.currentUser.birthDate.getTime(),
                "cityId": $scope.currentUser.cityId,
                "groupId": $scope.currentUser.groupId,
                "platoonId": $scope.currentUser.platoonId,
                "sectionId": $scope.currentUser.sectionId,
                "rankId": $scope.currentUser.rankId
            };
            ConfirmUsersService.approveUser({userId: $scope.currentUser.id}, valuesToSend,
                (res) => {
                    if (res.success) {
                        growl.success('Користувач ' + $scope.currentUser.firstName + ' ' +
                        $scope.currentUser.lastName + ' підтверджений');
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
            ConfirmUsersService.declineUser({userId: $scope.currentUser.id},
                (res) => {
                    if (res.success) {
                        growl.info('Користувач ' + $scope.currentUser.firstName + ' ' +
                            $scope.currentUser.lastName + ' видалений');
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

        //function to set in $scope list of Cities by countryId
        function getCities(countryId) {
            ConfirmUsersService.city({countryId: countryId}).$promise.then((res) => {
                if (res.success) {
                    $scope.cities = res.data;
                }
            });
        }

        //function to set in $scope list of Groups by cityId
        function getGroups(cityId) {
            ConfirmUsersService.group({cityId: cityId}).$promise.then((res) => {
                if (res.success) {
                    $scope.groups = res.data;
                }
            });
        }

        //function to set in $scope list of Platoons by groupId
        function getPlatoons(groupId) {
            ConfirmUsersService.platoon({groupId: groupId}).$promise.then((res) => {
                if (res.success) {
                    $scope.platoons = res.data;
                }
            });
        }

        //function to set in $scope list of Sections by platoonId
        function getSections(platoonId) {
            ConfirmUsersService.section({platoonId: platoonId}).$promise.then((res) => {
                if (res.success) {
                    $scope.sections = res.data;
                }
            });
        }

        //function to set in $scope list of Ranks
        function getRanks() {
            $scope.ranks = [
                {id: 2, name: 'Помічник'},
                {id: 3, name: 'Старший помічник'},
                {id: 1, name: 'Молодший помічник'}];
        }

        $log.debug('Init complete.');
    }
})();