/**
 * UIC Group Directive
 * @namespace Directives
 * @description Allow you to use several directives on one DOM element
 */
(() => {

    'use strict';

    angular
        .module('app')
        .directive('uicGroup', UicGroup);

    UicGroup.$inject = [];
    function UicGroup() {
        return {
            restrict: 'A',
            require: "ngModel",
            scope: {
                uicCompare: '=',
                uicCompareToValue: '=uicCompareTo',
                uicLazyValidation: '=',
                uicLazyValidationEvent: '=uicLazyValidationOn'
            },
            link: function (scope, elem, attr, ngModel) {

                scope.initLazyValidation = initLazyValidation;
                scope.initCompareToValidation = initCompareToValidation;

                activate();

                ////

                function activate() {
                    if (scope.uicLazyValidation) {
                        scope.initLazyValidation();
                    }

                    if (scope.uicCompare) {
                        scope.initCompareToValidation();
                    }
                }

                function initLazyValidation() {
                    ngModel.$validators.valueRequired = function (modelValue) {
                        if (!scope.uicLazyValidationEvent) return true;
                        ngModel.$setDirty();
                        return !!modelValue;
                    };

                    scope.$watch('uicLazyValidationEvent', function () {
                        ngModel.$validate();
                    });
                }

                function initCompareToValidation() {
                    ngModel.$validators.compareTo = function (modelValue) {
                        return modelValue === scope.uicCompareToValue;
                    };

                    scope.$watch("uicCompareToValue", function () {
                        ngModel.$validate();
                    });
                }
            }
        }
    }
})();
