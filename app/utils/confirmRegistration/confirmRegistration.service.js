(() => {

    'use strict';

    angular
        .module('app')
        .service('ConfirmRegistrationService', ConfirmRegistrationService);

    function ConfirmRegistrationService(ConfirmRegistrationFactory) {

        this.checkEmail = ConfirmRegistrationFactory.checkEmail

    }
})();