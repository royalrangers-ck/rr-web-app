//Scripts for "landing page - header"
//Author: Vasiliy Dikun

//this script enable pop-up menu
$(window).scroll(function () {
    var navbar = $(".lph-nav"),
        curve = $('.rr-header-curve');

    if ($(window).scrollTop() > 900) {
        navbar.addClass("lph-nav_fixed_top");
        navbar.removeClass('lph-nav_hide');
        curve.removeClass('rr-curve');
    } else {
        if ($(window).scrollTop() > 400) {
            navbar.addClass('lph-nav_hide');
        } else {
            navbar.removeClass('lph-nav_hide');
            navbar.removeClass("lph-nav_fixed_top");
            curve.addClass('rr-curve');
        }

    }
});