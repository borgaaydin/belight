function contractClick() {
    $('#uyelikSozlesmeModal').modal('show');
}

$(document).ready(function(){


    $("#lol").click(function() {
        alert("lol");

    });

    $('#uyelikSozlesmesiOnay').click(function() {
        $('#uyelikSozlesmeModal').modal('hide');
        $('#kampanya-uyelik-sozlesmesi').prop('checked', true);
    });

});