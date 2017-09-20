$(document).ready(function() {
     $(".basket__coupon > a").click(function() {
         $(".basket__coupon .container__login__form__item").show();
         $(this).text("Kullan");
     });
});
