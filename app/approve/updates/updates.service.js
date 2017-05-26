(() => {

    'use strict';

    angular
        .module('app')
        .service('ApproveUpdatesService', ApproveUpdatesService);

    function ApproveUpdatesService(ApproveUpdates) {
        this.getUsers = ApproveUpdates.getUsers;
        this.allPlatoons = ApproveUpdates.allPlatoons;
    }
})();
