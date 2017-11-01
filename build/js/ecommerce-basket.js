$(document).ready(function() {
     $(".basket__coupon > a").click(function() {
         $(".basket__coupon .container__login__form__item").show();
         $(this).text("Kullan");
     });
    $("#checkbox-siparis-notu").change(function() {
        if(this.checked) {
            $(".havale__bilgileri__siparis-notu").show();
        } else {
            $(".havale__bilgileri__siparis-notu").hide();
        }
    });
});
