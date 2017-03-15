(function ($) {
    'use strict';

    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled < 350) {
            $('.rr-parallax_front-tree').css('top',(0 - (scrolled * 0.25))+'px');
            $('.rr-parallax_middle-tree').css('top',(0 - (scrolled * 0.15))+'px');
        }
    });
}(jQuery));