(() => {

    'use strict';

    angular
        .module('app')
        .service('ApproveCurrentUserModalService', ApproveCurrentUserModalService);

    ApproveCurrentUserModalService.$inject = ['ApproveCurrentUserModal'];
    function ApproveCurrentUserModalService(ApproveCurrentUserModal) {
        this.approveUser = ApproveCurrentUserModal.approveUser;
        this.declineUser = ApproveCurrentUserModal.declineUser;
        this.updateUser = ApproveCurrentUserModal.updateUser;
        /** Get data for edit fields */
        this.countries = ApproveCurrentUserModal.countries;
        this.city = ApproveCurrentUserModal.city;
        this.group = ApproveCurrentUserModal.group;
        this.platoon = ApproveCurrentUserModal.platoon;
        this.section = ApproveCurrentUserModal.section;
        this.rank = ApproveCurrentUserModal.rank;
    }
})();
