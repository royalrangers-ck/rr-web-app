(() => {

    'use strict';

    angular
        .module('app')
        .service('ApproveUserModalService', ApproveUserModalService);

    ApproveUserModalService.$inject = ['ApproveUserModal'];
    function ApproveUserModalService(ApproveUserModal) {
        this.approveUser = ApproveUserModal.approveUser;
        this.declineUser = ApproveUserModal.declineUser;
        this.updateUser = ApproveUserModal.updateUser;
        /** Get data for edit fields */
        this.countries = ApproveUserModal.countries;
        this.region = ApproveUserModal.region;
        this.city = ApproveUserModal.city;
        this.platoon = ApproveUserModal.platoon;
        this.section = ApproveUserModal.section;
        this.rank = ApproveUserModal.rank;
    }
})();
