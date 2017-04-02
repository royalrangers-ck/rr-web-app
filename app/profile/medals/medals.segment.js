(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileMedalsSegment);

    ProfileMedalsSegment.$inject = ['$routeSegmentProvider'];
    function ProfileMedalsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/medals', 'profile.medals')
            .within('profile')
            .segment('medals', {
                'default': true,
                templateUrl: 'profile/medals/medals.html',
                controller: 'ProfileMedalsController',
                controllerAs: 'vm'
            });
    }
})();
