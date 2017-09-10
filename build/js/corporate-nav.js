$(document).ready(function(){
    var h = window.innerHeight;
    $(".mobile-menu__list").height(h);
    $(".mobile-menu__icon .fa-times").click(function() {
        $(".mobile-menu__list").animate({"margin-left": '-=280'});
        $(".bg-overlay").fadeOut(300);
        $(".mobile-menu__icon .fa-times").addClass("hidden");
        $(".mobile-menu__icon .fa-bars").removeClass("hidden");
    });
    $(".mobile-menu__icon .fa-bars").click(function() {
        $(".mobile-menu__list").animate({"margin-left": '+=280'});
        $(".bg-overlay").fadeIn(300);
        $(".mobile-menu__icon .fa-bars").addClass("hidden");
        $(".mobile-menu__icon .fa-times").removeClass("hidden");
    });
    $(".bg-overlay").click(function() {
        $(".mobile-menu__list").animate({"margin-left": '-=280'});
        $(".bg-overlay").fadeOut(300);
        $(".mobile-menu__icon .fa-times").addClass("hidden");
        $(".mobile-menu__icon .fa-bars").removeClass("hidden");
    });
});