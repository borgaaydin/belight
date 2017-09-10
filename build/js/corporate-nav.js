$(document).ready(function(){
    var h = window.innerHeight;
    $(".mobile-menu__list").height(h);
    $(".mobile-menu__icon").click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
            $(".mobile-menu__list").animate({"margin-left": '-=280'});
        } else {
            $(".mobile-menu__list").animate({"margin-left": '+=280'});
        }
        $(this).data("clicks", !clicks);
    });
});