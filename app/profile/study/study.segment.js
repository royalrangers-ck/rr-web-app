(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileStudySegment);

    function ProfileStudySegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/study', 'profile.study')
            .within('profile')
            .segment('study', {
                'default': true,
                templateUrl: 'profile/study/study.html',
                controller: 'ProfileStudyController',
                controllerAs: 'vm'
            });
    }
})();
