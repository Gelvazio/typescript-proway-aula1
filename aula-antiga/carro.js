"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano, valor, portas, motor, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
        this.portas = portas;
        this.motor = motor;
        this.cor = cor;
    }
    Carro.prototype.getMarca = function () {
        return this.marca;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.getValor = function () {
        return this.valor;
    };
    Carro.prototype.getPortas = function () {
        return this.portas;
    };
    Carro.prototype.getMotor = function () {
        return this.motor;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    return Carro;
}());
exports.Carro = Carro;
