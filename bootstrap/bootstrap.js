(() => {

    'use strict';

    angular
        .module('bootstrap', [])
        .service('UserService', function () {

            this.isSuperAdmin = isSuperAdmin;

            ////

            function isSuperAdmin(authorities) {
                return authorities.find((authority) => {
                    return authority && authority.name.toUpperCase() === 'ROLE_SUPER_ADMIN';
                });
            }
        })
        .run(($log) => {
            $log.debug('bootstrap module is running...');
        });
})();
