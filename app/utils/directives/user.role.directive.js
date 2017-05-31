/**
 * User Role Directives
 * @namespace Directives
 * @description You can limit the scope for the target user.
 *
 * @example
 *
 *      <user>
 *          <div>This content can see only user with role ROLE_USER. Nobody else can't see this.</div>
 *      </user>
 *
 *      <admin>
 *          <div>This content can see only user with role ROLE_ADMIN. Nobody else can't see this.</div>
 *      </admin>
 *
 *      <super-admin>
 *          <div>This content can see only user with role ROLE_SUPER_ADMIN. Nobody else can't see this.</div>
 *      </super-admin>
 */
(function () {

    'use strict';

    angular
        .module('app')
        .directive("user", User)
        .directive("admin", Admin)
        .directive("superAdmin", SuperAdmin);

    function User(Constants, UserService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            template: '<div ng-if="role.toUpperCase() === userRole.toUpperCase()"><ng-transclude></ng-transclude></div>',
            controller: ['$scope', function (scope) {
                scope.role = Constants.AUTHORITIES.ROLE_USER.name;
                scope.userRole = UserService.getTopAuthority().name.toUpperCase();
            }]
        }
    }

    function Admin(Constants, UserService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            template: '<div ng-if="role.toUpperCase() === userRole.toUpperCase()"><ng-transclude></ng-transclude></div>',
            controller: ['$scope', function (scope) {
                scope.role = Constants.AUTHORITIES.ROLE_ADMIN.name;
                scope.userRole = UserService.getTopAuthority().name.toUpperCase();
            }]
        }
    }

    function SuperAdmin(Constants, UserService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            template: '<div ng-if="role.toUpperCase() === userRole.toUpperCase()"><ng-transclude></ng-transclude></div>',
            controller: ['$scope', function (scope) {
                scope.role = Constants.AUTHORITIES.ROLE_ADMIN.name;
                scope.userRole = UserService.getTopAuthority().name.toUpperCase();
            }]
        }
    }
})();
