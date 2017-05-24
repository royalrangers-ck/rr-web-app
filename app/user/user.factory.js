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
            'approveUser': {
                method: 'POST',
                url: `${Endpoints.USER}/approve`
            },
            'declineUser': {
                method: 'POST',
                url: `${Endpoints.USER}/reject`
            },
            'countries': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/countries`,
                isArray: false
            },
            'region': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/region`,
                params: {cityId: '@countryId'},
                isArray: false
            },
            'city': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/city`,
                params: {countryId: '@regionId'},
                isArray: false
            },
            'platoon': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/platoon`,
                params: {groupId: '@cityId'},
                isArray: false
            },
            'section': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/section`,
                params: {platoonId: '@platoonId'},
                isArray: false
            },
            'rank': {
                method: 'GET',
                url: `${Endpoints.PUBLIC}/ranks`,
                isArray: false
            }

        });
    }
})();