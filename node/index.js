/*const calculadora = require('./modulo01')();
const falar = require('./modulo02');
const teste = require('./modulo03');
const funcao = require('./modulo04');
*/
const contatos1 = require('./contatos')();
const contatos2 = require('./contatos')();
/*
console.log('Olá Mundo');
console.log("A soma de 2 + 2 é =", calculadora.somar(2,2));

falar.oi();
falar.pergunta();
falar.tchau();

teste.teste();
teste.teste2();
teste.teste3();

funcao();
*/

console.log('Contatos: ', contatos1.getContatos());
console.log('Contatos: ', contatos2.getContatos());
contatos1.add(1);
console.log('Contatos: ', contatos1.getContatos());
console.log('Contatos: ', contatos2.getContatos());