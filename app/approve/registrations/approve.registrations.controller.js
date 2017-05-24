(() => {

    'use strict';

    angular
        .module('app')
        .controller('ApproveRegistrationsController', ApproveRegistrationsController);

    ApproveRegistrationsController.$inject = ['users', '$log', 'AppModalService', 'UserService'];
    function ApproveRegistrationsController(usersResponse, $log, AppModalService, UserService) {

        const vm = this;

        let user = UserService.get();

        vm.usersList = [];
        vm.currentUser = {};
        vm.adminPlatoonName = user.platoon.name;

        vm.approveUserRegistration = approveUserRegistration;

        activate();

        ////

        function activate() {
            $log.debug('Init ApproveRegistrationsController ...');
            //init "FooTable" plugin in all tables with 'footable' class
            $(document).ready(function () {
                $('.footable').footable();
            });
            if (usersResponse && usersResponse.success) {
                vm.users = usersResponse.data;
                console.log(vm.users)
            }
        }

        function approveUserRegistration(currentUser) {
            AppModalService.approveUserRegistrationModal(currentUser);
        }
    }
})();