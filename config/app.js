mysql = require('mysql')

cnn = function (){}
cnn.exec = function(query, callback) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        database: 'db_pessoas',
        user: 'root',
        password: ''
    })
    connection.query(query, (err, rows) => {
        if (err) {
            console.error('Erro no .query = ' + err.stack)
        }
        callback(rows, err) 
        connection.end()  
    })
}

var App = {
    cnn: cnn
}

module.exports = App