import { Carro } from "./carro";
import { Vendedor } from "./vendedor";
import { Comprador } from "./comprador";

let carros = [
    new Carro('Chevrolet', 'Captiva', 2011, 49000, 5, '2.4', 'prata'),
    new Carro('Volksvagem', 'Voyage', 2011, 32000, 5, '1.6', 'prata'),
    new Carro('Volksvagem', 'Fusca', 1970, 8000, 3, '1300', 'preto')
];

let vendedor = new Vendedor("Joaozinho", carros);

let comprador = new Comprador("Pedro", 40000);

let carrosVendedor = vendedor.getCarrosVenda();

console.log('O vendedor ' + vendedor.getNome() + ' tem os seguintes carros a venda.');
for(let i = 0; i < carrosVendedor.length; i++){
    console.log('Carro ' + i + ':');
    console.log('Marca: ' + carrosVendedor[i].getMarca());
    console.log('Modelo: ' + carrosVendedor[i].getModelo());
    console.log('Ano: ' + carrosVendedor[i].getAno());
    console.log('Valor: ' + carrosVendedor[i].getValor());
    console.log('----------------');
}

let carroComprar = carrosVendedor[1];

if(comprador.comprarCarro(carroComprar) === true){
    console.log('O comprador ' + comprador.getNome() + ' comprou o carro:')
    console.log(comprador.getCarro());
    console.log('Saldo do comprador: ' + comprador.getSaldoDisponivel());
} else {
    console.log('Comprador sem saldo para comprar o carro informado');
}

