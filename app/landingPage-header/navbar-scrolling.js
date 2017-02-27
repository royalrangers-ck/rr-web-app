//Scripts for "landing page - header"
//Author: Vasiliy Dikun

//this script enable pop-up menu
$(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        $(".lph-nav").addClass("lph-nav_fixed_top");
    } else {
        $(".lph-nav").removeClass("lph-nav_fixed_top");
    }
});