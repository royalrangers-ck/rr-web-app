(() => {

    'use strict';

    angular
        .module('app')
        .controller('ApproveUpdatesController', ApproveUpdatesController);

    ApproveUpdatesController.$inject = ['users', 'AppModalService', 'UserService'];
    function ApproveUpdatesController(usersResponse, AppModalService, UserService) {

        const vm = this;

        let user = UserService.get();

        vm.users = [];
        vm.currentUser = {};
        vm.adminPlatoonName = user.platoon.name;
        vm.approveUserUpdate = approveUserUpdate;

        activate();

        ////

        function activate() {
            //init "FooTable" plugin in all tables with 'footable' class
            $(document).ready(function () {
                $('.footable').footable();
            });

            if (usersResponse && usersResponse.success) {
                vm.users = usersResponse.data;
                console.log(vm.users)
            }
        }

        function approveUserUpdate(modifiedUser) {
            AppModalService.openModalWindowForApprovingUserUpdate(modifiedUser);
        }
    }
})();