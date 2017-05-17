(() => {

    'use strict';

    angular
        .module('app')
        .service('RegistrationService', RegistrationService);

    RegistrationService.$inject = ['Registration'];
    function RegistrationService(Registration) {

        this.register = Registration.register;
        this.confirm = Registration.confirm;

        /** Get data for registration */
        this.countries = Registration.countries;
        this.city = Registration.city;
        this.group = Registration.group;
        this.platoon = Registration.platoon;
        this.section = Registration.section;
        this.ranks = Registration.ranks;
    }
})();