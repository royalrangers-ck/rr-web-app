(() => {

    'use strict';

    angular
        .module('app')
        .service('EditUserModalService', EditUserModalService);

    function EditUserModalService(EditUserModal) {
        this.updateUser = EditUserModal.updateUser;
        /** Get data for edit fields */
        this.countries = EditUserModal.countries;
        this.region = EditUserModal.region;
        this.city = EditUserModal.city;
        this.platoon = EditUserModal.platoon;
        this.section = EditUserModal.section;
        this.rank = EditUserModal.rank;
    }
})();
