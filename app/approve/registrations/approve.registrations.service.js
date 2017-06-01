(() => {

    'use strict';

    angular
        .module('app')
        .service('ApproveRegistrationsService', ApproveRegistrationsService);

    function ApproveRegistrationsService(UserService, UserFactory) {

        this.getApproveRegistrationUsers = getApproveRegistrationUsers;

        ////

        function getApproveRegistrationUsers() {
            let users;
            let userAuthority = UserService.getTopAuthority().id;

            if (userAuthority === 2) {
                let user = UserService.get();
                users = UserFactory.getApproveRegistrationUsersByPlatoonId({platoonId: user.platoon.id}).$promise;
            }

            if (userAuthority === 3) {
                users = UserFactory.getApproveRegistrationUsersForSuperAdmin().$promise;
            }

            return users;
        }
    }
})();
