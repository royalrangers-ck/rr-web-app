(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmRegistrationController', ConfirmRegistrationController);

    ConfirmRegistrationController.$inject = ['$log', 'status'];
    /* Injected status resolve from routing*/

    function ConfirmRegistrationController($log, status) {
        const vm = this;

        activate();
        logResponse();
        checkEmail();


        function activate() {
            $log.debug('Init ConfirmRegistrationController ...');
        }

        function logResponse() { /* We print our status in console for testing */
            $log.debug(status);
        }

        function checkEmail() { /* We check server response*/
            if (status || status.status) { /* Does we have response and response status from server? */
                if (status.status === 'successful') { /* All good*/
                    showMessages(status.status, 'Good')
                } else { /* Another status, something wrong*/
                    showMessages(status.status, 'Bad')
                }
            } else { /* We haven't response*/
                showMessages('Server error', 'Very Bad')
            }
            //  On undefined angular fall down,
            //  Need created some error handler

        }

        function showMessages(stat, mess) { /* Function for showing response */
            vm.status = stat;
            vm.mess = mess;
        }

    }
})();





