(() => {

    'use strict';

    angular
        .module('app')
        .service('ConfirmRegistrationService', ConfirmRegistrationService);

    ConfirmRegistrationService.$inject = ['ConfirmRegistrationFactory'];
    function ConfirmRegistrationService(ConfirmRegistrationFactory) {

        this.checkEmail = ConfirmRegistrationFactory.checkEmail

    }
})();