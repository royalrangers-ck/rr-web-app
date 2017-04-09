(function () {

    'use strict';

    angular
        .module('app')
        .constant('Ranks', Ranks());
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