$(document).ready(function(){
    $(".product__variant__item").click(function(){
        if(!$(this).hasClass("chosen")) {
            $(".product__variant__item").each(function(){
               $(this).removeClass("chosen");
            });
            $(this).addClass("chosen");
        }
    });
});