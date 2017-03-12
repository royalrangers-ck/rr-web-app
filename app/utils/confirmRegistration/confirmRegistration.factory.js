(() => {

    'use strict';

    angular
        .module('app')
        .factory('ConfirmRegistrationFactory', ConfirmRegistrationFactory);

    ConfirmRegistrationFactory.$inject = [];

    function ConfirmRegistrationFactory() {
        return { /* Factory must always return object */
            log: function (param) { /* Test. We return param back. */
                return param;
            }
        }
    }
})();

