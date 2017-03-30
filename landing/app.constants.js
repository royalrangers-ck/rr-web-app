(function () {

    'use strict';

    angular
        .module('app')
        .constant('Endpoints', Endpoints());

    function Endpoints() {
        let constants = {
            API: '/api'
        };

        // REGISTRATION
        constants.REGISTRATION = constants.API + '/registration';

        // PUBLIC DATA API
        constants.PUBLIC = constants.API + '/public';

        constants.COUNTRIES = constants.PUBLIC + '/countries';
        constants.CITIES = constants.PUBLIC + '/cities';
        constants.GROUPS = constants.PUBLIC + '/groups';
        constants.PLATOONS = constants.PUBLIC + '/platoons';
        constants.SECTIONS = constants.PUBLIC + '/sections';

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
