(() => {

    'use strict';

    angular
        .module('app')
        .service('ApproveUpdatesService', ApproveUpdatesService);

    function ApproveUpdatesService(UserService, UserFactory) {

        this.getApproveUpdateUsers = getApproveUpdateUsers;

        ////

        function getApproveUpdateUsers() {
            let users;
            let userAuthority = UserService.getTopAuthority().id;

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
