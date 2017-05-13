(() => {

    'use strict';

    angular
        .module('app')
        .service('ApproveUpdatesService', ApproveUpdatesService);

    ApproveUpdatesService.$inject = ['ApproveUpdates'];
    function ApproveUpdatesService(ApproveUpdates) {
        this.getUsers = ApproveUpdates.getUsers;
        this.allPlatoons = ApproveUpdates.allPlatoons;
    }
})();
