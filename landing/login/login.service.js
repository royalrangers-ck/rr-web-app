(() => {

    'use strict';

    angular
        .module('app')
        .service('LoginService', LoginService);

    LoginService.$inject = ['$log', 'Login'];
    function LoginService($log, Login) {

        this.login = Login.send;

        activate();

        function activate() {
            $log.debug('Init LoginService...');
        }
    }
})();