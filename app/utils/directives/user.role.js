(function () {

    'use strict';

    angular
        .module('app')
        .directive("userRole", UserRole)
        .directive("user", User);

    function UserRole() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                role: '=',
                userRole: '='
            },
            template: '<div ng-if="show" ng-transclude></div>',
            link: function (scope, element, attrs) {
                if (scope.role && scope.userRole) {
                    scope.show = scope.role.toUpperCase() === scope.userRole.toUpperCase();
                }
            }
        }
    }

    User.$inject = ['Constants', 'UserService'];
    function User(Constants, UserService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            template: '<user-role role="role" user-role="userRole"></user-role>',
            link: function (scope, element, attrs) {
                scope.role = Constants.AUTHORITIES.ROLE_USER.name;
                scope.userRole = UserService.getTopAuthority().toUpperCase();
            }
        }
    }

})();