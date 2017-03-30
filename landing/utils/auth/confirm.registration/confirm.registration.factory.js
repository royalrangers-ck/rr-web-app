(() => {

    'use strict';

    angular
        .module('app')
        .factory('ConfirmRegistrationFactory', ConfirmRegistrationFactory);

    ConfirmRegistrationFactory.$inject = ['$resource'];
    function ConfirmRegistrationFactory($resource) {
        return {
            checkEmail: function (token) {
                return $resource('/api/confirmRegistration', null,
                    {
                        'check': {
                            method: 'POST',
                            params: {
                                token: token
                            },
                            isArray: false
                        }
                    }
                );
            }
        }
    }
})();
