(() => {

    'use strict';

    angular
        .module('app')
        .controller('ApproveRegistrationsController', ApproveRegistrationsController);

    ApproveRegistrationsController.$inject = ['growl', '$log', 'AppModalService', 'usersList', 'UserService'];
    function ApproveRegistrationsController(growl, $log, AppModalService, usersList, UserService) {
        const vm = this;
        let user = UserService.get();

        vm.usersList = [];
        vm.currentUser = {};
        vm.adminPlatoonName = user.platoon.name;
        vm.editUser = editCurrentUser;

        activate();

        ////

        function activate() {
            $log.debug('Init ApproveRegistrationsController ...');
            getUsers();
            //init "FooTable" plugin in all tables with 'footable' class
            $(document).ready(function () {
                $('.footable').footable();
            });
            $log.debug('Init complete.');
        }

        function getUsers() {
            usersList.$promise.then((res) => {
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

        function editCurrentUser(id) {
            let currentUser = vm.usersList.find((item) => item.id == id) || {};
            AppModalService.approveUserModal(currentUser);
            $log.debug('Set user to modal window:', vm.currentUser);
        }
    }
})();