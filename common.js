$(document).ready(function () {
   
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 34) {
            $('.menu-holder').addClass('stick');
        } else {
            $('.menu-holder').removeClass('stick');
        }
    })
    $(window).scroll();
});