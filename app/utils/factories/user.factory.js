(() => {

    'use strict';

    angular
        .module('app')
        .factory('UserFactory', UserFactory);

    function UserFactory($resource, Endpoints) {

        return $resource(Endpoints.USER, {userId: '@userId'}, {
            'getTempUser': {
                method: 'GET',
                url: `${Endpoints.USER}/temp`
            },
            'updateUser': {
                method: 'POST',
                url: `${Endpoints.USER}/update/temp`
            },
            'changePassword': {
                method: 'POST',
                url: `${Endpoints.PUBLIC}/forgotPassword`,
                params: {
                    email: '@email'
                }
            },

            'getApproveRegistrationUsers': {
                method: 'GET',
                url: `${Endpoints.USER}/approve/registration`
            },

            'getApproveUpdateUsers': {
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
            'rejectUpdateUser': {
                method: 'POST',
                url: `${Endpoints.USER}/reject/temp/:tempUserId`,
                params: {
                    tempUserId: '@tempUserId'
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