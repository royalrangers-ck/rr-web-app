(() => {

    'use strict';

    angular
        .module('app')
        .controller('FriendsController', FriendsController);

    function FriendsController ($log) {
        const vm = this;

        activate();

        ////

        function activate () {
            $log.debug('Init FriendsController ...');
        }
    }
})();
