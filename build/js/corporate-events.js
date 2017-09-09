$(document).ready(function(){
    $(".events").slick({
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