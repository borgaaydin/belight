$(document).ready(function(){
    var inputField = $();
    inputField = inputField.add("input").add("textarea");

    inputField.each(function () {
        if( $(this).val() ) {
            $(this).addClass("not-empty");
            $(this).siblings().addClass("floating");
        } else {
            $(this).removeClass("not-empty");
            $(this).siblings().removeClass("floating");
        }
    });

    inputField.blur(function()
    {
        if( $(this).val() ) {
            $(this).addClass("not-empty");
            $(this).siblings().addClass("floating");
        } else {
            $(this).removeClass("not-empty");
            $(this).siblings().removeClass("floating");
        }
    });
});