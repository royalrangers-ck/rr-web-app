(function (){

    'use strict';

    angular
        .module('app')
        .constant("Endpoints", Endpoints());

    function Endpoints() {
        let constants = {
            API: '/api'
        };

        constants.USER = constants.API + '/user';
        constants.EMAIL = constants.API + '/email';
        constants.LOGOUT = constants.API + '/auth/logout';

        return constants;
    }
})();