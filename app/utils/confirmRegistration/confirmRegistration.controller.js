(() => {

    'use strict';

    angular
        .module('app')
        .controller('ConfirmRegistrationController', ConfirmRegistrationController);

    ConfirmRegistrationController.$inject = ['$log', 'emailResponse'];
    function ConfirmRegistrationController($log, emailResponse) {
        const vm = this;

        logResponse();
        checkEmail();

        ////

        function logResponse() { /* We print our status in console for testing */
            $log.debug(emailResponse);
        }

        function checkEmail() { /* We check server response*/
            if (emailResponse || emailResponse.status) { /* Does we have response and response status from server? */
                if (emailResponse.status === 'successful') { /* All good*/
                    showMessages(emailResponse.status, emailResponse.data.message)
                } else { /* Another status, something wrong*/
                    showMessages(emailResponse.status, emailResponse.data.message)
                }
            }
            else { /* We haven't response*/
                showMessages('Server error', 'Very Bad')
            }
        }

        function showMessages(status, message) { /* Function for showing response */
            vm.status = status;
            vm.message = message;
        }

    }
})();
