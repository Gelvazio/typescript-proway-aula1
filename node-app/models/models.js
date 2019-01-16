const Usuario = require('../modules/usuario/usuario-model');
const Categoria = require('../modules/categoria/categoria-model');
const Conta = require('../modules/conta/conta-model');
const models = [
    Usuario,
    Categoria,
    Conta
]

module.exports = models;