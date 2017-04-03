(() => {
    'use strict';

    angular
        .module('app')
        .constant("Menu", Menu());

    function Menu () {
        return [{
                name: 'Система досягнень',
                route: '',
                submenu: [
                    { name: 'Початківці', route: '' },
                    { name: 'Відкривачі', route: '' },
                    { name: 'Слідопити', route: '' },
                    { name: 'Рейнджери', route: '' },
                    { name: 'Командири', route: '' }
                ]
            }, {
                name: 'Мої нагороди',
                route: '',
                submenu: [
                    { name: 'Медалі', route: '#/profile/medals' },
                    { name: 'Планки', route: '#/profile/strips' },
                    { name: 'За табори', route: '#/profile/camps' },
                    { name: 'За походи', route: '#/profile/trips' },
                    { name: 'Тести', route: '#/profile/tests' },
                    { name: 'Зірки', route: '#/profile/stars' },
                    { name: 'Чверть/рік', route: '#/profile/terms-years' },
                    { name: 'Начання', route: '#/profile/study' }
                ]
            },
            { name: 'Виконую', route: '' },
            { name: 'Адмініструю', route: '' },
            { name: 'Мій загін', route: '' },
            { name: 'Мої друзі', route: '' },
            { name: 'Бібліотека', route: '#/library' },
            { name: 'Налаштування', route: '#/settings' },
            { name: 'Підтвердити', route: '#/confirm-users' },
            { name: 'Тех.підтримка', route: '' },
            { name: 'Створити', route: '' }
        ];
    }
})();
