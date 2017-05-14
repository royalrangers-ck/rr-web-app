/**
 * Compare To Directive
 * @namespace Directives
 * @desc Convenient directive to validate password and confirm password inputs
 */
(() => {

    'use strict';

    angular
        .module('app')
        .directive('compareTo', CompareTo);

    CompareTo.$inject = [];
    function CompareTo() {
        return {
            restrict: 'A',
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function (scope, elem, attr, ngModel) {

                ngModel.$validators.compareTo = function (modelValue) {
                    return modelValue === scope.otherModelValue;
                };

                scope.$watch("otherModelValue", function () {
                    ngModel.$validate();
                });
            }
        }
    }
})();
