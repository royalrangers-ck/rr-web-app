(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileMedalSegment);

    ProfileMedalSegment.$inject = ['$routeSegmentProvider'];
    function ProfileMedalSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/medal', 'profile.medal')
            .within('profile')
            .segment('medal', {
                'default': true,
                templateUrl: 'profile/medal/medal.html',
                controller: 'ProfileMedalController',
                controllerAs: 'vm'
            });
    }
})();