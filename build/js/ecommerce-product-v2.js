$(document).ready(function(){
    $('.slider-for').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true
    });

    $('select').niceSelect();
});