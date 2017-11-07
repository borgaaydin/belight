$(document).ready(function(){
    $(".slider").slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
    $(".home-products").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".clients__list").slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".steps-showcase__list").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var youFrame =  $('#belightTanitim');
    var url = youFrame.attr('src');
    $('#tanitimVideo').on('hidden.bs.modal', function (e) {
        youFrame.attr('src', '');
        youFrame.attr('src', url);
    });

    $('#tanitimVideo').on('shown.bs.modal', function (e) {
        $("#belightTanitim")[0].src += "&autoplay=1";
    });
});