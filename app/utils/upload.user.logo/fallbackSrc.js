(function () {

    'use strict';

    angular
        .module('app')
        .directive("fallbackSrc", FallbackSrc);

    function FallbackSrc() {
        return {
            link: function (scope, element, attrs) {
                if (!Boolean(attrs.ngSrc)) {
                    element.attr('src', attrs.fallbackSrc);
                }
                element.bind('error', function () {
                    element.attr('src', attrs.fallbackSrc);
                });
            }
        }
    }
})();