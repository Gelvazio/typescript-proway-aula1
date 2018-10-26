"use strict";
exports.__esModule = true;
var Comprador = /** @class */ (function () {
    function Comprador(nome, saldoDisponivel, carroComprado) {
        this.nome = nome;
        this.saldoDisponivel = saldoDisponivel;
        this.carroComprado = carroComprado;
    }
    Comprador.prototype.comprarCarro = function (carro) {
        if (carro.getValor() > this.saldoDisponivel) {
            return false;
        }
        this.carroComprado = carro;
        var novoSaldo = this.saldoDisponivel - this.carroComprado.getValor();
        this.setSaldoDisponivel(novoSaldo);
        return true;
    };
    Comprador.prototype.getNome = function () {
        return this.nome;
    };
    Comprador.prototype.getCarro = function () {
        return this.carroComprado;
    };
    Comprador.prototype.setSaldoDisponivel = function (saldoDisponivel) {
        this.saldoDisponivel = saldoDisponivel;
    };
    Comprador.prototype.getSaldoDisponivel = function () {
        return this.saldoDisponivel;
    };
    return Comprador;
}());
exports.Comprador = Comprador;
