/**
 * Lazy Validation Directive
 * @namespace Directives
 * @decs Validate DOM element only if target event triggered
 */
(() => {

    'use strict';

    angular
        .module('app')
        .directive('lazyValidationOn', LazyValidation);

    function LazyValidation() {
        return {
            restrict: 'A',
            require: "ngModel",
            scope: {
                lazyValidationEvent: '=lazyValidationOn'
            },
            link: function (scope, elem, attr, ngModel) {

                ngModel.$validators.valueRequired = function (modelValue) {
                    if (!scope.lazyValidationEvent) return true;
                    ngModel.$setDirty();
                    return !!modelValue;
                };

                scope.$watch('lazyValidationEvent', function () {
                    ngModel.$validate();
                });
            }
        }
    }
})();
