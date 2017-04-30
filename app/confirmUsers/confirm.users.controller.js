(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmUsersController', ConfirmUsersController);
    ConfirmUsersController.$inject = ['$rootScope', 'growl', '$log', '$route', 'AppModalService', 'usersList', 'platoons'];

    function ConfirmUsersController($rootScope, growl, $log, $route, AppModalService, usersList, platoons) {
        const vm = this;
        vm.usersList = [];
        vm.currentUser = {};
        vm.adminPlatoonName = '';
        vm.editUser = editCurrentUser;

        activate();

        ////

        function activate() {
            $log.debug('Init ConfirmUsersController ...');
            getUsers($rootScope.currentUser.platoon.id);
            getAdminPlatoonName();
            //init "FooTable" plugin in all tables with 'footable' class
            $(document).ready(function () {
                $('.footable').footable();
            });
            $log.debug('Init complete.');
        }

        function getUsers(platoonId) {
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
            AppModalService.approveCurrentUserModal(currentUser);
            $log.debug('Set user to modal window:', vm.currentUser);
        }

        function getAdminPlatoonName() {
            return platoons.$promise.then((res) => {
                if (res.success) {
                    vm.adminPlatoonName = res.data.find((item) =>  item.id == $rootScope.currentUser.platoon.id).name;
                }
            })
        }
    }
})();