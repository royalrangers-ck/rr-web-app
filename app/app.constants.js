(function () {

    'use strict';

    angular
        .module('app')
        .constant("Endpoints", Endpoints());

    function Endpoints() {
        let constants = {
            API: '/api'
        };

        // REGISTRATION
        constants.REGISTRATION = constants.API + '/registration';

        // GET DATA FOR REGISTRATION
        constants.REGISTRATION_CITIES = constants.REGISTRATION + '/cities';
        constants.REGISTRATION_GROUPS = constants.REGISTRATION + '/groups';
        constants.REGISTRATION_PLATOONS = constants.REGISTRATION + '/platoons';
        constants.REGISTRATION_SECTIONS = constants.REGISTRATION + '/sections';

        // LOGIN

        // Endpoind /auth  handle POST authentication request
        constants.AUTH = constants.API + '/auth';

        // OTHER

        // Unsecured API maybe placed in /open/** path
        constants.OPEN = constants.API + '/open';

        // Demo /user  returns autorized user info
        constants.USER = constants.API + '/user';

        // Token refresh interval
        constants.TOKEN_REFRESH_INTERVAL = 1000 * 60 * 30; // 30min

        return constants;
    }
})();

