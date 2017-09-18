$(document).ready(function(){
    var images = $(".customjb__image img");

    function chooseBottle(index, image) {
        switch (index) {
            case 1 :
                image.attr("src", "img/product-custom/green_juice.png");
                image.attr("alt", "Green Juice");
                break;
            case 2:
                image.attr("src", "img/product-custom/odem_cayi.png");
                image.attr("alt", "Ödem Çayı");
                break;
            case 3:
                image.attr("src", "img/product-custom/relax_tea.png");
                image.attr("alt", "Relax Tea");
                break;
            case 4:
                image.attr("src", "img/product-custom/betty_boo.png");
                image.attr("alt", "Betty Boo");
                break;
            default:
                image.attr("src", "img/product-custom/bottle-silhouette.png");
                image.attr("alt", "");
                break;
        }
    }

    $(".customjb__select ul.list li").click(function() {
        var bottleType = $(this).index();
        var bottleIndex = $(this).parent().parent().index();
        console.log(bottleType);
        console.log(bottleIndex);
        switch (bottleIndex) {
            case 1 :
                chooseBottle(bottleType, images.eq(3));
                break;
            case 3:
                chooseBottle(bottleType, images.eq(4));
                break;
            case 5:
                chooseBottle(bottleType, images.eq(5));
                break;

        }
    });
});