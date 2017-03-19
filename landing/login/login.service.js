(() => {

    'use strict';

    angular
        .module('app')
        .service('LoginService', LoginService);

    LoginService.$inject = ['Login'];
    function LoginService(Login) {

        this.login = Login.send;
    }
})();
