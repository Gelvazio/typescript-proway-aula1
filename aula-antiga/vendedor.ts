import { Carro } from "./carro";

export class Vendedor{
    private nome: string;
    private carrosVenda: Array<Carro>;

    constructor(nome: string, carrosVenda?: Array<Carro>) {
        this.nome = nome;
        this.carrosVenda = carrosVenda;
    }

    public getNome(){
        return this.nome;
        
    } 
    public getCarrosVenda(): Array<Carro>{
        return this.carrosVenda;
    }
}
