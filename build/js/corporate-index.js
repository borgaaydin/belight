$(document).ready(function(){
    $(".slider").slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
    $(".home-products").slick({
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".clients__list").slick({
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".steps-showcase__list").slick({
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});