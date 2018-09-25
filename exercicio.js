"use strict";
exports.__esModule = true;
var carro_1 = require("./carro");
var vendedor_1 = require("./vendedor");
var comprador_1 = require("./comprador");
var carros = [
    new carro_1.Carro('Chevrolet', 'Captiva', 2011, 49000, 5, '2.4', 'prata'),
    new carro_1.Carro('Volksvagem', 'Voyage', 2011, 32000, 5, '1.6', 'prata'),
    new carro_1.Carro('Volksvagem', 'Fusca', 1970, 8000, 3, '1300', 'preto')
];
var vendedor = new vendedor_1.Vendedor("Joaozinho", carros);
var comprador = new comprador_1.Comprador("Pedro", 40000);
var carrosVendedor = vendedor.getCarrosVenda();
console.log('O vendedor ' + vendedor.getNome() + ' tem os seguintes carros a venda.');
for (var i = 0; i < carrosVendedor.length; i++) {
    console.log('Carro ' + i + ':');
    console.log('Marca: ' + carrosVendedor[i].getMarca());
    console.log('Modelo: ' + carrosVendedor[i].getModelo());
    console.log('Ano: ' + carrosVendedor[i].getAno());
    console.log('Valor: ' + carrosVendedor[i].getValor());
    console.log('----------------');
}
var carroComprar = carrosVendedor[1];
if (comprador.comprarCarro(carroComprar) === true) {
    console.log('O comprador ' + comprador.getNome() + ' comprou o carro:');
    console.log(comprador.getCarro());
    console.log('Saldo do comprador: ' + comprador.getSaldoDisponivel());
}
else {
    console.log('Comprador sem saldo para comprar o carro informado');
}
