(() => {

    'use strict';

    angular
        .module('app')
        .service('ConfirmUsersService', ConfirmUsersService);

    ConfirmUsersService.$inject = ['ConfirmUsers'];
    //this service connect factory to controller
    function ConfirmUsersService(ConfirmUsers) {
        this.getUsers = ConfirmUsers.getUsers;
        this.approveUser = ConfirmUsers.approveUser;
        this.declineUser = ConfirmUsers.declineUser;
        this.updateUser = ConfirmUsers.updateUser;
        /** Get data for edit fields */
        this.countries = ConfirmUsers.countries;
        this.city = ConfirmUsers.city;
        this.group = ConfirmUsers.group;
        this.platoon = ConfirmUsers.platoon;
        this.section = ConfirmUsers.section;
    }
})();
