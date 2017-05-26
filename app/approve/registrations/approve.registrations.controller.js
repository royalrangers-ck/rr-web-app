(() => {

    'use strict';

    angular
        .module('app')
        .controller('ApproveRegistrationsController', ApproveRegistrationsController);

    ApproveRegistrationsController.$inject = ['users', 'AppModalService', 'UserService'];
    function ApproveRegistrationsController(users, AppModalService, UserService) {

        const vm = this;

        let user = UserService.get();

        vm.usersList = [];
        vm.currentUser = {};
        vm.adminPlatoonName = user.platoon.name;

        vm.approveUserRegistration = approveUserRegistration;

        activate();

        ////

        function activate() {
            //init "FooTable" plugin in all tables with 'footable' class
            $(document).ready(function () {
                $('.footable').footable();
            });

            if (users && users.success) {
                vm.users = users.data;
                console.log(vm.users)
            }
        }

        function approveUserRegistration(currentUser) {
            AppModalService.approveUserRegistrationModal(currentUser);
        }
    }
})();