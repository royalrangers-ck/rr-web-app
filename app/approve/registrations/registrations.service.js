(() => {

    'use strict';

    angular
        .module('app')
        .service('ApproveRegistrationsService', ApproveRegistrationsService);

    function ApproveRegistrationsService(ApproveRegistrations) {
        this.getUsers = ApproveRegistrations.getUsers;
        this.allPlatoons = ApproveRegistrations.allPlatoons;
    }
})();
