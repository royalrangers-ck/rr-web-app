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
        constants.CITIES = constants.REGISTRATION + '/cities';
        constants.GROUPS = constants.REGISTRATION + '/groups';
        constants.PLATOONS = constants.REGISTRATION + '/platoons';
        constants.SECTIONS = constants.REGISTRATION + '/sections';

        // LOGIN

        // Endpoind /auth  handle POST authentication request
        constants.AUTH = constants.API + '/auth';

        // OTHER

        // Unsecured API maybe placed in /open/** path
        constants.OPEN = constants.API + '/open';

        // Demo /user  returns autorized user info
        constants.USER = constants.API + '/user';

        return constants;
    }
})();

