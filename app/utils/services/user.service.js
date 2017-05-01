/**
 * User Service
 * @namespace Services
 */
(() => {

    'use strict';

    angular
        .module('app')
        .service('UserService', UserService);

    UserService.$inject = [];
    function UserService() {
        let it = this;

        it.currentUser = {};

        it.get = get;
        it.save = save;
        it.clean = clean;
        it.fetchFromStorage = fetchFromStorage;

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

        function fetchFromStorage() {
            let currentUser = window.localStorage.getItem('currentUser');
            if (currentUser) {
                currentUser = JSON.parse(currentUser);
            }
            return currentUser;
        }
    }
})();
