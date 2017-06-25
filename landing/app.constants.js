(function () {

    'use strict';

    angular
        .module('app')
        .constant('Endpoints', Endpoints())
        .constant('Ranks', Ranks());

    function Endpoints() {
        let constants = {
            API: '/api'
        };

        // REGISTRATION
        constants.REGISTRATION = constants.API + '/registration';

        // PUBLIC DATA API
        constants.PUBLIC = constants.API + '/public';

        constants.COUNTRIES = constants.PUBLIC + '/countries';
        constants.REGIONS = constants.PUBLIC + '/regions';
        constants.REGION = constants.PUBLIC + '/region';
        constants.CITIES = constants.PUBLIC + '/cities';
        constants.CITY = constants.PUBLIC + '/city';
        constants.PLATOONS = constants.PUBLIC + '/platoons';
        constants.PLATOON = constants.PUBLIC + '/platoon';
        constants.SECTIONS = constants.PUBLIC + '/sections';
        constants.SECTION = constants.PUBLIC + '/section';
        constants.RANKS = constants.PUBLIC + '/ranks';

        // LOGIN

        // Endpoind /auth  handle POST authentication request
        constants.AUTH = constants.API + '/auth';

        constants.FORGOT_PASSWORD = constants.PUBLIC + '/forgotPassword';
        constants.CHANGE_PASSWORD = constants.PUBLIC + '/changePassword';

        // OTHER

        // Unsecured API maybe placed in /open/** path
        constants.OPEN = constants.API + '/open';

        // Demo /user  returns autorized user info
        constants.USER = constants.API + '/user';

        // Subscribe
        constants.SUBSCRIBE = constants.API + '/subscribe';

        return constants;
    }

    function Ranks() {
        let ranks = {};

        ranks['SENIOR_LEADER'] = 'Старший лідер';
        ranks['SENIOR_LEADER_ASSISTANT'] = 'Помічник старшого лідера';
        ranks['LEADER'] = 'Лідер';
        ranks['LEADER_ASSISTANT'] = 'Помічник лідера';
        ranks['STEWARD'] = 'Завхоз';
        ranks['SCRIBE'] = 'Писарь';
        ranks['CHRONICLER'] = 'Літописець';
        ranks['CHAPLAIN_ASSISTANT'] = 'Помічник капелана';
        ranks['COMMANDER_ASSISTANT'] = 'помічник командира';
        ranks['ASSISTANT_COMMANDER'] = 'Командир-помічник';
        ranks['COMMANDER'] = 'Командир';
        ranks['SENIOR_COMMANDER'] = 'Старший командир';
        ranks['CHAPLAIN'] = 'Капелан';
        ranks['PASTOR'] = 'Пастор';
        ranks['PLATOON_COUNCILMAN'] = 'Рада загону';
        ranks['CITY_COMMANDER'] = 'Міський командир';
        ranks['CITY_STAFF_MEMBER'] = 'Член міського штабу';
        ranks['REGIONAL_COMMANDER'] = 'Областний командир';
        ranks['SECOND_REGIONAL_COMMANDER'] = 'Заступник областного командира';
        ranks['REGIONAL_CHAPLAIN'] = 'Областний капелан';
        ranks['REGIONAL_STAFF_MEMBER'] = 'Член областного штабу';
        ranks['ZONAL_COMMANDER'] = 'Регіональний командир';
        ranks['SECOND_ZONAL_COMMANDER'] = 'Заступник регіонального командира';
        ranks['ZONAL_CHAPLAIN'] = 'Регіональний капелан';
        ranks['ZONAL_STAFF_MEMBER'] = 'Член регіонального штабу';
        ranks['NATIONAL_COMMANDER'] = 'Національний командир';
        ranks['SECOND_NATIONAL_COMMANDER'] = 'Заступник національного командира';
        ranks['NATIONAL_CHAPLAIN'] = 'Національний капелан';
        ranks['NATIONAL_STAFF_MEMBER'] = 'Член національного штабу';

        return ranks;
    }

})();
