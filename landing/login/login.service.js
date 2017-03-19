(() => {

    'use strict';

    angular
        .module('app')
        .service('LoginService', LoginService);

    LoginService.$inject = ['$log', 'Login'];
    function LoginService($log, Login) {

        this.Login = Login.send;
    }
})();