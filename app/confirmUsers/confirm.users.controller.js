(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmUsersController', ConfirmUsersController);

    ConfirmUsersController.$inject = ['$scope', '$http', '$log', 'ConfirmUsersService'];
    function ConfirmUsersController($scope, $http, $log, ConfirmUsersService) {
        $log.debug('Init ConfirmUsersController ...');

        //set variables
        const vm = this;
        $scope.usersList = [];
        $scope.currentUser = {};
        $scope.setCurrentUser = setCurrentUser;
        $scope.getGroups = getGroups;
        $scope.getPlatoons = getPlatoons;
        $scope.getSections = getSections;
        $scope.approveUser = approveUser;
        $scope.declineUser = declineUser;

        getUsers(1);

        //function to get user list
        function getUsers(grId) {
            ConfirmUsersService.getUsers({groupId: grId}).$promise.then((res) => {
                if (res.success) {
                    var result;
                    result = JSON.parse(res.data.message);
                    //replace int data to new Data()
                    result.forEach((item) => {
                        item.birthDate = new Date(item.birthDate);
                    });
                    $scope.usersList = result;
                    $log.debug('Load users list:');
                    $log.debug($scope.usersList);
                }
            });
        }

        function approveUser() {
            var valuesToSend = {
                "firstName": $scope.currentUser.firstName,
                "lastName": $scope.currentUser.lastName,
                "gender": $scope.currentUser.gender,
                "telephoneNumber": $scope.currentUser.phoneNumber,
                "birthDate": $scope.currentUser.birthDate.getTime(),
                "cityId": $scope.currentUser.cityId,
                "groupId": $scope.currentUser.groupId,
                "platoonId": $scope.currentUser.platoonId,
                "sectionId": $scope.currentUser.sectionId,
                "rankId": $scope.currentUser.rankId
            };
            $http.put('/api/user/' + $scope.currentUser.id, valuesToSend, {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }).then((res) => {
                console.log(res);
                getUsers(1);
                alert('Користувач' + $scope.currentUser.firstName + ' ' + $scope.currentUser.lastName + ' прийнятий');
            }).catch((err) => {
                console.log(err);
            });
        }

        function declineUser() {
            $http.delete('/api/user/' + $scope.currentUser.id)
                .then(function (res) {
                    console.log(res);
                    alert('Користувач' + $scope.currentUser.firstName + ' ' + $scope.currentUser.lastName + ' не прийнятий');
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        //function to set current user to edit
        function setCurrentUser(id) {
            $scope.currentUser = $scope.usersList.find((item) => item.id == id) || {};
            getCities($scope.currentUser.countryId);
            getGroups($scope.currentUser.cityId);
            getPlatoons($scope.currentUser.groupId);
            getSections($scope.currentUser.platoonId);
            getRanks();
            $log.debug('Set current user:');
            $log.debug($scope.currentUser);
        };

        //function to get Cities list
        function getCities(id) {
            ConfirmUsersService.city({countryId: id}).$promise.then((res) => {
                if (res.success) {
                    $scope.cities = res.data;
                }
            });
        }

        //function to get Groups list
        function getGroups(id) {
            ConfirmUsersService.group({cityId: id}).$promise.then((res) => {
                if (res.success) {
                    $scope.groups = res.data;
                }
            });
        }

        //function to get Platoons list
        function getPlatoons(id) {
            ConfirmUsersService.platoon({groupId: id}).$promise.then((res) => {
                if (res.success) {
                    $scope.platoons = res.data;
                }
            });
        }

        //function to get Sections list
        function getSections(id) {
            ConfirmUsersService.section({platoonId: id}).$promise.then((res) => {
                if (res.success) {
                    $scope.sections = res.data;
                }
            });
        }

        //function to get ranks list
        function getRanks() {
            $scope.ranks = [
                {id: 2, name: 'Помічник'},
                {id: 3, name: 'Старший помічник'},
                {id: 1, name: 'Молодший помічник'}];
        }

        $log.debug('Init complete.');
    }
})();