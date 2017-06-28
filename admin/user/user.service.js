/**
 * User Service
 * @namespace Services
 */
(() => {

    'use strict';

    angular
        .module('admin')
        .service('UserService', UserService);

    function UserService(Constants, Ranks) {
        let it = this;

        it.currentUser = {};

        it.get = get;
        it.save = save;
        it.clean = clean;
        it.fetchFromStorage = fetchFromStorage;
        it.getTopAuthority = getTopAuthority;

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

            if (!it.currentUser.userRankLabel) {
                it.currentUser.userRankLabel = Ranks[it.currentUser.userRank];
            }
        }

        function clean() {
            it.currentUser = {};
        }

        function fetchFromStorage() {
            let currentUser = window.localStorage.getItem('currentUser');
            if (currentUser) {
                currentUser = JSON.parse(currentUser);
            }
            return currentUser;
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
    }
})();
