(() => {

    'use strict';

    angular
        .module('app')
        .factory('UserFactory', UserFactory);

    function UserFactory($resource, Endpoints) {

        return $resource(Endpoints.USER, {userId: '@userId'}, {
            'updateUser': {
                url: `${Endpoints.USER}/update/temp`,
                method: 'PUT'
            },

            'getApproveRegistrationUsersByPlatoonId': {
                method: 'GET',
                url: `${Endpoints.USER}/approve/registration/:platoonId`,
                params: {
                    platoonId: '@platoonId'
                }
            },
            'getApproveUpdateUsersByPlatoonId': {
                method: 'GET',
                url: `${Endpoints.USER}/approve/update/:platoonId`,
                params: {
                    platoonId: '@platoonId'
                }
            },

            'getApproveRegistrationUsersForSuperAdmin': {
                method: 'GET',
                url: `${Endpoints.USER}/approve/registration/super`
            },
            'getApproveUpdateUsersForSuperAdmin': {
                method: 'GET',
                url: `${Endpoints.USER}/approve/update`
            },

            'approveUpdateUser': {
                method: 'PUT',
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