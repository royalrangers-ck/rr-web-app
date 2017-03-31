(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmUsersController', ConfirmUsersController);

    ConfirmUsersController.$inject = ['$scope', '$log'];
    function ConfirmUsersController($scope, $log) {
        const vm = this;
        $scope.userList = [];
        $scope.currentUser = {};

        activate();

        ////

        function activate() {
            $scope.usersList = loadUsers('./confirmUsers/users.json');
            //create function to set selected user in confirm menu
            $scope.setCurrentUser = function (id) {
                $scope.currentUser = $scope.usersList.find((item) => item.id == id);
            }
        }

        //function to load users from file
        function loadUsers(fileName) {
            var users;
            $.ajax({
                url: fileName,
                async: false,
                dataType: 'json',
                success: function (data) {
                    //replace string date to new Date() in all users
                    data.forEach((item) => item.birth = new Date(item.birth));
                    users = data;
                }
            });
            return users;
        }
    }
})();
