(function () {

    'use strict';

    angular
        .module('app')
        .service('AppModalService', AppModalService);

    AppModalService.$inject = ['$uibModal'];
    function AppModalService($uibModal) {

        //  EXAMPLE
        //
        // this.Modal = Modal;
        //
        // function Modal() {
        //     return $uibModal.open({
        //         animation: true,
        //         templateUrl: 'Url relative to app.js',
        //         controller: 'Is a Controller will use in modal window',
        //         controllerAs: 'vm',
        //     });
        // }
    }
})();