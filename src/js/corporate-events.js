$(document).ready(function(){
    $(".events").slick({
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    unslick: true
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});