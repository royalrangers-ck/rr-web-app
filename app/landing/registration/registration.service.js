(() => {

    'use strict';

    angular
        .module('app')
        .service('RegistrationService', RegistrationService);

    RegistrationService.$inject = ['$log', 'Registration'];
    function RegistrationService($log, Registration) {

        this.registerUser = Registration.save;
    }
})();