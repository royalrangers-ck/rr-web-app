//Scripts for "landing page - header"
//Author: Vasiliy Dikun

//this script enable pop-up menu
$(window).scroll(function() {
    var navbar = $(".lph-nav"),
        curve = $('.rr-header-curve');
    if ($(window).scrollTop() > 500) {
        navbar.addClass("lph-nav_fixed_top");
        curve.removeClass('rr-curve');
    } else {
        navbar.removeClass("lph-nav_fixed_top");
        curve.addClass('rr-curve');
    }
});