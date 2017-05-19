(() => {

    'use strict';

    angular
        .module('app')
        .service('UpdatesUserModalService', UpdatesUserModalService);

    UpdatesUserModalService.$inject = ['UpdatesUserModal'];
    function UpdatesUserModalService(UpdatesUserModal) {
        this.approveUser = UpdatesUserModal.approveUser;
        this.declineUser = UpdatesUserModal.declineUser;
        this.updateUser = UpdatesUserModal.updateUser;
        /** Get data for edit fields */
        this.countries = UpdatesUserModal.countries;
        this.city = UpdatesUserModal.city;
        this.group = UpdatesUserModal.group;
        this.platoon = UpdatesUserModal.platoon;
        this.section = UpdatesUserModal.section;
        this.rank = UpdatesUserModal.rank;
    }
})();
