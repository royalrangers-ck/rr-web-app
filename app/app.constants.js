(function () {

    'use strict';

    angular
        .module('app')
        .constant('Constants', Constants())
        .constant('Endpoints', Endpoints())
        .constant('Menu', Menu())
        .constant('Ranks', Ranks());

    function Constants() {
        let constants = {};

        constants.DEFAULT_IMG_SRC = 'static/vendor/images/user.png';

        constants.AUTHORITIES = {
            ROLE_USER: {
                id: 1,
                name: 'ROLE_USER'
            },
            ROLE_ADMIN: {
                id: 2,
                name: 'ROLE_ADMIN'
            },
            ROLE_SUPER_ADMIN: {
                id: 3,
                name: 'ROLE_SUPER_ADMIN'
            }
        };

        constants.GENDER = {
            M: 'Чоловіча',
            F: 'Жіноча'
        };

        constants.ACHIEVEMENTS_STATES = {
            NOT_STARTED: 'Не розпочатий',
            IN_PROGRESS: 'Виконується',
            SUBMITTED: 'Перевірка',
            APPROVED: 'Виконаний',
            REJECTED: 'Провалений'
        };

        return constants;
    }

    function Endpoints() {
        let endpoints = {
            API: '/api'
        };

        // REGISTRATION
        endpoints.REGISTRATION = endpoints.API + '/registration';

        // GET DATA FOR REGISTRATION
        endpoints.REGISTRATION_CITIES = endpoints.REGISTRATION + '/cities';
        endpoints.REGISTRATION_GROUPS = endpoints.REGISTRATION + '/groups';
        endpoints.REGISTRATION_PLATOONS = endpoints.REGISTRATION + '/platoons';
        endpoints.REGISTRATION_SECTIONS = endpoints.REGISTRATION + '/sections';

        // LOGIN

        // Endpoind /auth  handle POST authentication request
        endpoints.AUTH = endpoints.API + '/auth';

        // OTHER

        // Unsecured API maybe placed in /open/** path
        endpoints.OPEN = endpoints.API + '/open';

        // User  returns authorized user info
        endpoints.USER = endpoints.API + '/user';

        // Token refresh interval
        endpoints.TOKEN_REFRESH_INTERVAL = 1000 * 60 * 30; // 30min

        //PUBLIC INFO ENDPOINT
        endpoints.PUBLIC = endpoints.API + '/public';

        // ACHIEVEMENTS
        endpoints.ACHIEVEMENTS = endpoints.API + '/achievements';
        endpoints.ACHIEVEMENTS_USER_TEST = endpoints.ACHIEVEMENTS + '/userTest';
        endpoints.ACHIEVEMENTS_TEST = endpoints.ACHIEVEMENTS + '/test';

        //ROLES
        endpoints.ROLES = {
            user: 'ROLE_USER',
            admin: 'ROLE_ADMIN',
            superAdmin: 'ROLE_SUPER_ADMIN'
        };

        return endpoints;
    }

    function Menu() {
        return [
            {
                name: 'Система досягнень',
                route: '',
                submenu: [
                    {name: 'Початківці',    route: '#/achievements/kids'},
                    {name: 'Відкривачі',    route: '#/achievements/discovery'},
                    {name: 'Слідопити',     route: '#/achievements/adventure'},
                    {name: 'Рейнджери',     route: '#/achievements/expedition'},
                    {name: 'Командири',     route: '#/achievements/leader'}
                ]
            },
            {
                name: 'Мої нагороди',
                route: '',
                submenu: [
                    {name: 'Медалі', route: '#/profile/medals'},
                    {name: 'Планки', route: '#/profile/strips'},
                    {name: 'За табори', route: '#/profile/camps'},
                    {name: 'За походи', route: '#/profile/trips'},
                    {name: 'Тести', route: '#/profile/tests'},
                    {name: 'Зірки', route: '#/profile/stars'},
                    {name: 'Чверть/рік', route: '#/profile/terms-years'},
                    {name: 'Начання', route: '#/profile/study'}
                ]
            },
            {name: 'Виконую',       route: '#/progress'},
            {name: 'Адмініструю',   route: '#/admin'},
            {name: 'Мій загін',     route: '#/platoon'},
            {name: 'Мої друзі',     route: '#/friends'},
            {name: 'Бібліотека',    route: '#/library'},
            {
                name: 'Підтвердити',
                adminsOnly: true,
                submenu: [
                    {name: 'Реєстрації',        route: '#approve/registrations'},
                    {name: 'Оновлення даних',   route: '#approve/updates'}
                ]
            },
            {name: 'Тех.підтримка', route: '#/support'},
            {name: 'Створити',      route: '#/created'}
        ];
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
