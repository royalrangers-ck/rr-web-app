(() => {

    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$log'];
    function MainController($log) {
        const vm = this;

        vm.submit = submit;

        activate();

        function activate() {
            $log.debug('Init MainController ...');
        }

        function submit() {
            console.log(vm.email)
        }
    }
})();