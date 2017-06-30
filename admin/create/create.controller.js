(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreateController', CreateController);

    function CreateController ($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init CreateController ...');
        }
    }

})();

