(() => {

    'use strict';

    angular
        .module('admin')
        .controller('ApproveRegistrationsController', ApproveRegistrationsController);

    function ApproveRegistrationsController(users, ModalDialogService, UserService) {

        const vm = this;

        let user = UserService.get();
        let userAuthority = UserService.getTopAuthority();

        vm.approveUserRegistration = approveUserRegistration;

        activate();

        ////

        function activate() {
            //init "FooTable" plugin in all tables with 'footable' class
            $(document).ready(function () {
                $('.footable').footable();
            });

            if (userAuthority.id === 2) {
                vm.adminPlatoonName = user.platoon.name;
            }

            if (users && users.success) {
                vm.users = users.data;
            }
        }

        function approveUserRegistration(currentUser) {
            ModalDialogService.approveUserRegistrationModal(currentUser);
        }
    }
})();