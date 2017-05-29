(() => {

    'use strict';

    angular
        .module('app')
        .config(ProfileTermsYearsSegment);

    ProfileTermsYearsSegment.$inject = ['$routeSegmentProvider'];
    function ProfileTermsYearsSegment($routeSegmentProvider) {

        $routeSegmentProvider
            .when('/profile/terms-years', 'profile.terms-years')
            .within('profile')
            .segment('terms-years', {
                'default': true,
                templateUrl: 'profile/terms.years/terms.years.html',
                controller: 'ProfileTermsYearsController',
                controllerAs: 'vm'
            });
    }
})();
