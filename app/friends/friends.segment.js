(() => {

    'use strict';

    angular
        .module('app')
        .config(FriendsSegment);

    FriendsSegment.$inject = ['$routeSegmentProvider'];
    function FriendsSegment($routeSegmentProvider) {

        $routeSegmentProvider.when('/friends', 'friends').segment('friends', {
            'default': true,
            templateUrl: 'friends/friends.html',
            controller: 'FriendsController'
        });
    }
})();