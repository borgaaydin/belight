$(document).ready(function(){
    var h = window.innerHeight;
    $(".header-ecommerce .mobile-menu__list").height(h);
    $(".header-ecommerce .mobile-menu-basket__list").height(h);

    $(".header-ecommerce .mobile-menu__icon .corporate-times").click(function() {
        $(".header-ecommerce .mobile-menu__list").animate({"margin-left": '-280px'});
        $(".bg-overlay").fadeOut(300);
        $(this).addClass("hidden");
        $(".header-ecommerce .mobile-menu__icon .fa-bars").removeClass("hidden");
    });
    $(".header-ecommerce .mobile-menu__icon .fa-bars").click(function() {
        $(".header-ecommerce .mobile-menu__list").animate({"margin-left": '0'});
        $(".bg-overlay").fadeIn(300);
        $(this).addClass("hidden");
        $(".header-ecommerce .mobile-menu__icon .corporate-times").removeClass("hidden");

        $(".header-ecommerce .mobile-menu-basket__list").animate({"margin-right": '-280px'});
        $(".header-ecommerce .ecommerce-times").addClass("hidden");
        $(".header-ecommerce .mobile-basket").removeClass("hidden");
    });

    $(".bg-overlay").click(function() {
        $(".header-ecommerce .mobile-menu__list").animate({"margin-left": '-280px'});
        $(this).fadeOut(300);
        $(".header-ecommerce .mobile-menu__icon .corporate-times").addClass("hidden");
        $(".header-ecommerce .mobile-menu__icon .fa-bars").removeClass("hidden");

        $(".header-ecommerce .mobile-menu-basket__list").animate({"margin-right": '-280px'});
        $(".header-ecommerce .ecommerce-times").addClass("hidden");
        $(".header-ecommerce .mobile-basket").removeClass("hidden");
    });

    $(".header-ecommerce .mobile-basket").click(function() {
        $(".header-ecommerce .mobile-menu-basket__list").animate({"margin-right": '0'});
        $(".bg-overlay").fadeIn(300);
        $(this).addClass("hidden");
        $(".header-ecommerce .ecommerce-times").removeClass("hidden");

        $(".header-ecommerce .mobile-menu__list").animate({"margin-left": '-280px'});
        $(".header-ecommerce .mobile-menu__icon .corporate-times").addClass("hidden");
        $(".header-ecommerce .mobile-menu__icon .fa-bars").removeClass("hidden");
    });
    $(".header-ecommerce .ecommerce-times").click(function() {
        $(".header-ecommerce .mobile-menu-basket__list").animate({"margin-right": '-280px'});
        $(".bg-overlay").fadeOut(300);
        $(this).addClass("hidden");
        $(".header-ecommerce .mobile-basket").removeClass("hidden");
    });
});