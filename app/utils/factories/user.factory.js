(() => {

    'use strict';

    angular
        .module('app')
        .factory('UserFactory', UserFactory);

    function UserFactory($resource, Endpoints) {

        return $resource(Endpoints.USER, {userId: '@userId'}, {
            'getTempUser': {
                url: `${Endpoints.USER}/temp`,
                method: 'GET'
            },
            'updateUser': {
                method: 'POST',
                url: `${Endpoints.USER}/update/temp`,
            },

            'getApproveUpdateUsersByPlatoonId': {
                method: 'GET',
                url: `${Endpoints.USER}/approve/update/:platoonId`,
                params: {
                    platoonId: '@platoonId'
                }
            },

            'getApproveRegistrationUsers': {
                method: 'GET',
                url: `${Endpoints.USER}/approve/registration`
            },

            'getApproveUpdateUsersForSuperAdmin': {
                method: 'GET',
                url: `${Endpoints.USER}/approve/update`
            },

            'approveUpdateUser': {
                method: 'POST',
                url: `${Endpoints.USER}/update/:temp_userId`,
                params: {
                    temp_userId: '@temp_userId'
                }
            },
            'approveRegistrationUser': {
                method: 'POST',
                url: `${Endpoints.USER}/approve/registration/:userId`,
                params: {
                    userId: '@userId'
                }
            },
            'rejectRegistrationUser': {
                method: 'POST',
                url: `${Endpoints.USER}/reject/registration/:userId`,
                params: {
                    userId: '@userId'
                }
            }
        });
    }
})();