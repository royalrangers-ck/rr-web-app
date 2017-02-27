(function ($) {
    'use strict';

    $('.rra-scroll-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 250);
    });
}(jQuery));