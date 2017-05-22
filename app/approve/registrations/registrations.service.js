(() => {

    'use strict';

    angular
        .module('app')
        .service('ApproveRegistrationsService', ApproveRegistrationsService);

    ApproveRegistrationsService.$inject = ['ApproveRegistrations'];
    function ApproveRegistrationsService(ApproveRegistrations) {
        this.getUsers = ApproveRegistrations.getUsers;
        this.allPlatoons = ApproveRegistrations.allPlatoons;
    }
})();
