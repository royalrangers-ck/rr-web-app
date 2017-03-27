(() => {

    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$log', '$http', 'growl'];
    function MainController($log, $http, growl) {
        const vm = this;

        vm.submit = submit;

        activate();

        function activate() {
            $log.debug('Init MainController ...');
        }

        function submit() {
            $log.debug(`==> Subscribe email: ${vm.email}`);
            $http.get('/api/create?email=' + vm.email, (res) => {
                if (res.success) {
                    growl.success(`Email ${vm.email} subscribed successfully.`);
                }
            });
        }
    }
})();
