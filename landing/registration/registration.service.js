(() => {

    'use strict';

    angular
        .module('app')
        .service('RegistrationService', RegistrationService);

    RegistrationService.$inject = ['$log', 'Registration'];
    function RegistrationService($log, Registration) {

        this.register = Registration.register;

        /** Get data for registration */
        this.countries = Registration.countries;
        this.city = Registration.city;
        this.group = Registration.group;
        this.platoon = Registration.platoon;
        this.section = Registration.section;
    }
})();