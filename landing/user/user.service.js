/**
 * User Service
 * @namespace Services
 */
(() => {

    'use strict';

    angular
        .module('app')
        .service('UserService', UserService);

    function UserService($http, Constants, Endpoints, TokenService) {
        let it = this;

        it.currentUser = {};

        it.get = get;
        it.save = save;
        it.clean = clean;
        it.requestUser = requestUser;
        it.getTopAuthority = getTopAuthority;
        it.isSuperAdmin = isSuperAdmin;

        ////

        function get() {
            return it.currentUser;
        }

        function save(user) {
            user || (user = {});

            for (var key in user) {
                if (user.hasOwnProperty(key)) {
                    it.currentUser[key] = user[key];
                }
            }
        }

        function clean() {
            it.currentUser = {};
        }

        function requestUser(callback) {
            let request = {
                method: 'GET',
                url: Endpoints.USER,
                headers: {'Authorization': TokenService.get()}
            };

            $http(request).then(callback);
        }

        function getTopAuthority() {
            let topAuthority;

            it.currentUser.authorities.forEach((userAuthority) => {
                if (userAuthority.name.toUpperCase() === Constants.AUTHORITIES.ROLE_USER.name.toUpperCase()) {
                    topAuthority = Constants.AUTHORITIES.ROLE_USER;
                }
            });

            it.currentUser.authorities.forEach((userAuthority) => {
                if (userAuthority.name.toUpperCase() === Constants.AUTHORITIES.ROLE_ADMIN.name.toUpperCase()) {
                    topAuthority = Constants.AUTHORITIES.ROLE_ADMIN;
                }
            });

            it.currentUser.authorities.forEach((userAuthority) => {
                if (userAuthority.name.toUpperCase() === Constants.AUTHORITIES.ROLE_SUPER_ADMIN.name.toUpperCase()) {
                    topAuthority = Constants.AUTHORITIES.ROLE_SUPER_ADMIN;
                }
            });

            return topAuthority;
        }

        function isSuperAdmin() {
            let topAuthority = getTopAuthority();
            return Boolean(topAuthority === Constants.AUTHORITIES.ROLE_SUPER_ADMIN);
        }
    }
})();
