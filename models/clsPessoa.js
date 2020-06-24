var App = require('../config/app')

var Pessoa = function(){
    this.nome = ''
    this.sobrenome = ''
    this.cpf = ''
    this.telefone = ''
    this.endereco = ''

    this.save = function(callback, cpfAlteracao){
        if(cpfAlteracao == undefined){
            var query = "insert into tb_pessoas (cpf, nome, sobrenome, telefone, endereco)" + "values ('" + this.cpf + "', '" + this.nome + "', '" + this.sobrenome + "', '" + this.telefone + "', '" + this.endereco + "')"
        }
        else{
            var query = "update tb_pessoas set (nome='" + this.nome + "', sobrenome='" + this.sobrenome + "', cpf='" + this.cpf + "', telefone='" + this.telefone + "', endereco='" + this.endereco + "')" + " where cpf = '" + cpfAlteracao + "'"
        }
        console.log(query)
        App.cnn.exec(query, function(rows, err) {
            if (err) {
                console.log('Erro ao executar query (' + query + ')' + err)
                callback.call()
            }
            else{
                callback.call()
            }
        })
    }

    this.delete = function(callback){
        var query = "delete from tb_pessoas where cpf='" + this.cpf + "'"
        console.log(query)
        App.cnn.exec(query, function(rows, err) {
            if (err) {
                console.log('Erro ao executar query (' + query + ')' + err)
                callback.call()
            }
            else{
                callback.call()
            }
        })
    }
}

Pessoa.searchCPF = function(cpf, callback){
    var query = "SELECT * FROM tb_pessoas WHERE cpf LIKE'%" + cpf + "%'"
    App.cnn.exec(query, function(err, rows) {
        if (err) {
            console.log('Erro ao executar query (' + query + ')')
            callback.call(null, [])
        }
        else{
            callback.call(null, rows)
        }
    })
}

Pessoa.searchName = function(nome, callback){
    var query = "SELECT * FROM tb_pessoas WHERE nome LIKE'%" + nome + "%'"
    App.cnn.exec(query, function(err, rows) {
        if (err) {
            console.log('Erro ao executar query (' + query + ')')
            callback.call(null, [])
        }
        else{
            callback.call(null, rows)
        }
    })
}

Pessoa.returnAll = function(callback){
    var query = "SELECT * FROM tb_pessoas"
    App.cnn.exec(query, (rows, err) => {
        if (err) {
            console.log('Erro ao executar query (' + query + ')', err)
            callback.call(null, [])
        }
        else{
            callback.call(null, rows)
        }
    })
}

module.exports = Pessoa