(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmUsersController', ConfirmUsersController);
    ConfirmUsersController.$inject = ['$rootScope', 'growl', '$log', '$route', 'ConfirmUsersService', 'AppModalService'];

    //TODO: find answer - why $route.reload() doesn't work
    function ConfirmUsersController($rootScope, growl, $log, $route, ConfirmUsersService, AppModalService) {
        const vm = this;
        vm.usersList = [];
        vm.currentUser = {};
        vm.adminInfo = $rootScope.currentUser;
        vm.editUser = editCurrentUser;

        activate();

        ////

        function activate() {
            $log.debug('Init ConfirmUsersController ...');
            getUsers($rootScope.currentUser.platoon);
            //init "FooTable" plugin in all tables with 'footable' class
            $(document).ready(function () {
                $('.footable').footable();
            });
            $log.debug('Init complete.');
        }

        function getUsers(platoonName) {
            ConfirmUsersService.allPlatoons().$promise.then((res) => {
                if (res.success) {
                    let platoonId = res.data.find((item) => item.name == platoonName).id;
                    ConfirmUsersService.getUsers({platoonId: platoonId}).$promise.then((res) => {
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
            });
        }

        function editCurrentUser(id) {
            let currentUser = vm.usersList.find((item) => item.id == id) || {};
            AppModalService.approveCurrentUserModal(currentUser);
            $log.debug('Set user to modal window:', vm.currentUser);
        }
    }
})();