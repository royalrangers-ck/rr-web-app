(() => {

    'use strict';

    angular
        .module('app')
        .service('ApproveService', ApproveService);

    function ApproveService(UserService, UserFactory) {

        this.getApproveRegistrationUsers = getApproveRegistrationUsers;
        this.getApproveUpdateUsers = getApproveUpdateUsers;

        ////

        let users;
        let userAuthority = UserService.getTopAuthority().id;

        function getApproveRegistrationUsers() {

            if (userAuthority === 2) {
                let user = UserService.get();
                users = UserFactory.getApproveRegistrationUsersByPlatoonId({platoonId: user.platoon.id}).$promise;
            }

            if (userAuthority === 3) {
                users = UserFactory.getApproveRegistrationUsersForSuperAdmin().$promise;
            }

            return users;
        }

        function getApproveUpdateUsers() {

            if (userAuthority === 2) {
                let user = UserService.get();
                users = UserFactory.getApproveUpdateUsersByPlatoonId({platoonId: user.platoon.id}).$promise;
            }

            if (userAuthority === 3) {
                users = UserFactory.getApproveUpdateUsersForSuperAdmin().$promise;
            }

            return users;
        }
    }
})();
