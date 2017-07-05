(() => {

    'use strict';

    angular
        .module('admin')
        .controller('ApproveUpdatesController', ApproveUpdatesController);

    function ApproveUpdatesController(users, ModalDialogService, UserService) {

        const vm = this;

        let user = UserService.get();
        let userAuthority = UserService.getTopAuthority();

        vm.approveUserUpdate = approveUserUpdate;

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

        function approveUserUpdate(modifiedUser) {
            ModalDialogService.approveUserUpdateModal(modifiedUser);
        }
    }
})();