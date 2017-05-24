(() => {

    'use strict';

    angular
        .module('app')
        .factory('User', User);

    User.$inject = ['$resource', 'Endpoints'];
    function User($resource, Endpoints) {

        return $resource(Endpoints.USER, {userId: '@userId'}, {
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
            'updateUser': {
                method: 'PUT'
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