(() => {

    'use strict';

    angular
        .module('app')
        .factory('ConfirmRegistrationFactory', ConfirmRegistrationFactory);

    ConfirmRegistrationFactory.$inject = ['$resource'];

    function ConfirmRegistrationFactory($resource) {
        return {
            /* Factory must always return object */

            checkEmail: function () { /* Its test function, for simulate server response */
                let rand = Math.floor(Math.random() * 3) + 1;
                if (rand === 1) { /* Good response*/
                    return {
                        data: {
                            text: 'User successful reg'
                        },
                        status: 'successful'
                    }
                }
                if (rand === 2) { /* Bad response*/
                    return {
                        data: {
                            text: 'Some bad error'
                        },
                        status: 'smt. else'
                    }
                }
                if (rand === 3) { /* We haven't response*/
                    return undefined;
                }
            }
        }
    }
})();


// }checkEmail: function (token) {
//     /*  $resource:
//      The returned resource object has action methods which provide high-level
//      behaviors without the need to interact with the low level $http service.
//      */
//     return $resource('/api/confirmRegistration', null,
//         {
//             'check': {
//                 method: 'POST',
//                 params: {
//                     token: token
//                 },
//                 isArray: false
//             }
//         }
//     );
// }
