(() => {
    'use strict';

    angular
        .module('app')
        .controller('sidebarCtrl', sidebarCtrl);

    function sidebarCtrl($scope) {

        $scope.leftSidebarSchema = [{
            name: 'Система досягнень',
            route: '',
            submenu: [
                {
                    name: 'Початківці',
                    route: ''
                }, {
                    name: 'Відкривачі',
                    route: ''
                }, {
                    name: 'Слідопити',
                    route: ''
                }, {
                    name: 'Рейнджери',
                    route: ''
                }, {
                    name: 'Командири',
                    route: ''
                }
            ]
        }, {
            name: 'Мої нагороди',
            route: '',
            submenu: [
                {
                    name: 'Медалі',
                    route: ''
                }, {
                    name: 'Планки',
                    route: ''
                }, {
                    name: 'За табори',
                    route: ''
                }, {
                    name: 'За походи',
                    route: ''
                }, {
                    name: 'Зірки',
                    route: ''
                }, {
                    name: 'Чверть/рік',
                    route: ''
                }, {
                    name: 'Начання',
                    route: ''
                }
            ]
        }, {
            name: 'Виконую',
            route: ''
        }, {
            name: 'Адмініструю',
            route: ''
        }, {
            name: 'Мій загін',
            route: ''
        }, {
            name: 'Мої друзі',
            route: ''
        }, {
            name: 'Бібліотека',
            route: '#/library'
        }, {
            name: 'Налаштування',
            route: '#/settings'
        }, {
            name: 'Підтвердити',
            route: '#/confirm-users'
        }, {
            name: 'Тех.підтримка',
            route: ''
        }, {
            name: 'Створити',
            route: ''
        }];
    }
})();