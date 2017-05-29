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
                templateUrl: 'profile/study/study.html',
                controller: 'ProfileStudyController',
                controllerAs: 'vm'
            });
    }
})();
