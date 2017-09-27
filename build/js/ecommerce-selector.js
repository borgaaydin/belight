$(document).ready(function() {
    $('select').niceSelect();
    $("#checkbox-teslimat-fatura-ayni").change(function() {
        if(this.checked) {
            $(".fatura__container").show();
        } else {
            $(".fatura__container").hide();
        }
    });
    $('input[type=radio][name=faturaBireyselKurumsalRadio]').change(function() {
        if (this.value === 'bireysel') {
            $(".faturaKurumsalSelected").hide();
            $(".faturaBireyselSelected").show();
        }
        else if (this.value === 'kurumsal') {
            $(".faturaBireyselSelected").hide();
            $(".faturaKurumsalSelected").show();
        }
    });
    $('input[type=radio][name=teslimatBireyselKurumsalRadio]').change(function() {
        if (this.value === 'bireysel') {
            $(".teslimatKurumsalSelected").hide();
            $(".teslimatBireyselSelected").show();
        }
        else if (this.value === 'kurumsal') {
            $(".teslimatBireyselSelected").hide();
            $(".teslimatKurumsalSelected").show();
        }
    });
});