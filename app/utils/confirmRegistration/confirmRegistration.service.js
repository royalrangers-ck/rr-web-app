(() => {

    'use strict';

    angular
        .module('app')
        .service('ConfirmRegistrationService', ConfirmRegistrationService);

    ConfirmRegistrationService.$inject = ['ConfirmRegistrationFactory'];
    function ConfirmRegistrationService(ConfirmRegistrationFactory) {

        this.log = ConfirmRegistrationFactory.log; /* We grub log function from Factory */

    }
})();