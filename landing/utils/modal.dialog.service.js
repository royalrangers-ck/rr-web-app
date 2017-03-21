(function() {

    'use strict';

    angular
        .module('app')
        .service('ModalService', ModalService);

    ModalService.$inject = ['$uibModal'];
    function ModalService($uibModal) {

        this.simpleConfirmation = simpleConfirmation;

        ////

        function simpleConfirmation(options) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'utils/confirmation/confirmation.html',
                controller: 'ConfirmationController',
                controllerAs: 'vm',
                resolve: {
                    options: function() {
                        return options;
                    }
                }
            });
        }

    }
})();