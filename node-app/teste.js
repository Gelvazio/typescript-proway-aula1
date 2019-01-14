const db = require('./db');

let usuario = {
    nome: "Mauricio",
    email: "contato@mauricioschmitz.com.br",
    senha: "123456",
    status: "ativo"
}
db['Usuario'].findAll()
    .then(data => {
        console.log(JSON.stringify(data,null, 3));
    })
/*
db['Usuario'].create(usuario)
    .then(result => {
        console.log(result);
    });
*/