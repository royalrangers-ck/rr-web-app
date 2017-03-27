(() => {

    'use strict';

    angular
        .module('app')
        .service('ConfirmUsersService', ConfirmUsersService);

    ConfirmUsersService.$inject = ['$log', 'ConfirmUsers'];

    function ConfirmUsersService($log, ConfirmUsers) {
        this.getUsers = ConfirmUsers.getUsers;
        /** Get data for edit fields */
        this.countries = ConfirmUsers.countries;
        this.city = ConfirmUsers.city;
        this.group = ConfirmUsers.group;
        this.platoon = ConfirmUsers.platoon;
        this.section = ConfirmUsers.section;
    }
})();
