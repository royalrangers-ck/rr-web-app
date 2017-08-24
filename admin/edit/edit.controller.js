(() => {

    'use strict';

    angular
        .module('admin')
        .controller('EditController', EditController);

    function EditController ($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init EditController ...');
        }
    }

})();

