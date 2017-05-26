(() => {

    'use strict';

    angular
        .module('app')
        .service('ApproveUserModalService', ApproveUserModalService);

    function ApproveUserModalService(ApproveUserModal) {
        this.approveUser = ApproveUserModal.approveUser;
        this.declineUser = ApproveUserModal.declineUser;
        this.updateUser = ApproveUserModal.updateUser;
        /** Get data for edit fields */
        this.countries = ApproveUserModal.countries;
        this.city = ApproveUserModal.city;
        this.group = ApproveUserModal.group;
        this.platoon = ApproveUserModal.platoon;
        this.section = ApproveUserModal.section;
        this.rank = ApproveUserModal.rank;
    }
})();
