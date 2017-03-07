(function () {

    'use strict';

    angular
        .module('app')
        .constant("Endpoints", Endpoints());

    function Endpoints() {
        let constants = {
            API: '/api'
        };

        // /auth endpoind handle POST authentication request
        // and return token if auth successful
        constants.AUTH = constants.API + '/auth';

        // /user - demo returns autorized user info
        constants.USER = constants.API + '/user';

        // Unsecured API maybe placed in /open/** path
        constants.OPEN = constants.API + '/open';

        // Registration endpoints
        constants.REGISTRATION = constants.API + '/registration';
        constants.CITIES = constants.REGISTRATION + '/cities';
        constants.GROUPS = constants.REGISTRATION + '/groups';
        constants.PLATOONS = constants.REGISTRATION + '/platoons';
        constants.SECTIONS = constants.REGISTRATION + '/sections';

        // constants.EMAIL = constants.API + '/email';
        // constants.LOGOUT = constants.API + '/auth/logout';
        return constants;
    }
})();

