(() => {

    'use strict';

    angular
        .module('app')
        .service('ConfirmUsersService', ConfirmUsersService);

    ConfirmUsersService.$inject = ['ConfirmUsers'];
    function ConfirmUsersService(ConfirmUsers) {
        this.getUsers = ConfirmUsers.getUsers;
        this.allPlatoons = ConfirmUsers.allPlatoons;
    }
})();
