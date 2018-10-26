"use strict";
exports.__esModule = true;
var Vendedor = /** @class */ (function () {
    function Vendedor(nome, carrosVenda) {
        this.nome = nome;
        this.carrosVenda = carrosVenda;
    }
    Vendedor.prototype.getNome = function () {
        return this.nome;
    };
    Vendedor.prototype.getCarrosVenda = function () {
        return this.carrosVenda;
    };
    return Vendedor;
}());
exports.Vendedor = Vendedor;
