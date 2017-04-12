(() => {

    'use strict';

    angular
        .module('app')
        .service('EditUserModalService', EditUserModalService);

    EditUserModalService.$inject = ['EditUserModal'];
    function EditUserModalService(EditUserModal) {
        this.updateUser = EditUserModal.updateUser;
        /** Get data for edit fields */
        this.countries = EditUserModal.countries;
        this.city = EditUserModal.city;
        this.group = EditUserModal.group;
        this.platoon = EditUserModal.platoon;
        this.section = EditUserModal.section;
        this.rank = EditUserModal.rank;
    }
})();
