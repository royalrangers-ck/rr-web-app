$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $(".navbar").addClass("navbar-fixed-top");
    } else {
        $(".navbar").removeClass("navbar-fixed-top");
    }
});