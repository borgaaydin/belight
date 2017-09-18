$(document).ready(function() {
    var uncheckMesafeliSatisSozlesmesi = function() {
        $('#mesafeliSatisSozlesmesi').prop('checked', false);
    };
    $('select').niceSelect();
    $('.odeme-secenkleri-tab-bar ul a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $("#checkbox-siparis-notu").change(function() {
        if(this.checked) {
            $(".havale__bilgileri__siparis-notu").show();
        } else {
            $(".havale__bilgileri__siparis-notu").hide();
        }
    });
    $('#mesafeliSatisSozlesmesiLabel').click(function() {
        $('#mesafeliSatisSozlesmesiModal').modal('show');
        setTimeout(uncheckMesafeliSatisSozlesmesi, 1);
    });
    $('#mesafeliSatisSozlesmesiOnay').click(function() {
        $('#mesafeliSatisSozlesmesiModal').modal('hide');
        $('#mesafeliSatisSozlesmesi').prop('checked', true);
    });
});