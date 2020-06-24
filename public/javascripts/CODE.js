function validacao(){
    var nome = $('#nome').val()
    var sobrenome = $('#sobrenome').val()
    var cpf = $('#cpf').val()
    var telefone = $('#telefone').val()
    var endereco = $('#endereco').val()
    if(nome == "")
    {
        alert('Por favor digite seu nome!')
        $('#nome').focus()
        return false
    }
    else if(sobrenome == "")
    {
        alert('Por favor digite seu sobrenome!')
        $('#sobrenome').focus()
        return false
    }
    else if(cpf == "")
    {
        alert('Por favor digite seu CPF!')
        $('#cpf').focus()
        return false
    }
    else if(telefone == "")
    {
        alert('Por favor digite seu telefone!')
        $('#telefone').focus()
        return false
    }
    else if(endereco == "")
    {
        alert('Por favor digite seu endereço!')
        $('#endereco').focus()
        return false
    }
    else
    {
        return true
    }
}
function excluir(cpf){
    if(confirm('Deseja mesmo excluir o usuário pertencente ao CPF ' + cpf + '?')){
        window.location.href = '/excluir?cpf=' + cpf
    }
}
function login(user, password){
    return true
}