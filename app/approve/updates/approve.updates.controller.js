(() => {

    'use strict';

    angular
        .module('app')
        .controller('ApproveUpdatesController', ApproveUpdatesController);

    function ApproveUpdatesController(users, AppModalService, UserService) {

        const vm = this;

        let user = UserService.get();
        let userAuthority = UserService.getTopAuthority().id;

        vm.approveUserUpdate = approveUserUpdate;

        activate();

        ////

        function activate() {
            //init "FooTable" plugin in all tables with 'footable' class
            $(document).ready(function () {
                $('.footable').footable();
            });

            if (userAuthority === 2) {
                vm.adminPlatoonName = user.platoon.name;
            }

            if (users && users.success) {
                vm.users = users.data;
                console.log(vm.users);
            }
        }

        function approveUserUpdate(modifiedUser) {
            AppModalService.approveUserUpdateModal(modifiedUser);
        }
    }
})();