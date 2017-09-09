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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    settings: "slick"
                }
            }
        ]
    });
});