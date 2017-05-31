(() => {

    'use strict';

    angular
        .module('app')
        .config(FriendsSegment);

    function FriendsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/friends', 'friends').segment('friends', {
            templateUrl: 'friends/friends.html',
            controller: 'FriendsController'
        });
    }
})();