function carregarEstados() {
    $.ajax('/estados.json')
    .done(function(dados) {
        $('#slcEstado').append("<option value=''>Selecione</option>")
        for(var i = 0; i< dados.length; i++){
            var key = Object.keys(dados[i])[0]//resgatando a key - ex: key[0] == 'SP'
            var value = dados[i][key] //Resgatando o value da key acima - ex: key[0].value == 'São Paulo'
            $('#slcEstado').append("<option value='" + key + "'>" + value + "</option>")
        }
    })
    .fail(function() {
        alert('fail - ajax error')
    })
}
function carregarCidades(){
    var estado = $('#slcEstado').val()
    $('#slcCidade').empty()
    $('#slcCidade').append("<option value=''>Selecione</option>")
    if(estado != 'Selecione'){
        $.ajax('/cidades.json?estado=' + estado)
        .done(function(dados){
            for(var i = 0; i< dados.length; i++){
                var value = dados[i] //Valor do índice do array
                $('#slcCidade').append("<option value='" + value + "'>" + value + "</option>")
            }
        })
    }
}