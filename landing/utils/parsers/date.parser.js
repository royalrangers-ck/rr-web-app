(() => {

    'use strict';

    angular
        .module('app')
        .directive('dateParser', DateParser);

    //  viewValue => ngModel

    DateParser.$inject = [];
    function DateParser() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: ($scope, element, attrs, ngModel) => {
                ngModel.$parsers.push((value) => {
                    return value && +moment(value);
                })
            }
        }
    }
})();
