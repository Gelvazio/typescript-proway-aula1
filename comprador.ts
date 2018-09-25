import { Carro } from './carro';

export class Comprador{
    private nome: string;
    private saldoDisponivel: number;
    private carroComprado?: Carro;

    constructor(nome: string, saldoDisponivel: number, carroComprado?: Carro){
        this.nome = nome;
        this.saldoDisponivel = saldoDisponivel;
        this.carroComprado = carroComprado;
    }

    public comprarCarro (carro:Carro) : boolean{
        if(carro.getValor() > this.saldoDisponivel) {
            return false;
        }
        this.carroComprado = carro;
        this.setSaldoDisponivel(this.saldoDisponivel - this.carroComprado.getValor());
        return true;
    }

    public getNome(): string {
        return this.nome;
    }

    public getCarro(): Carro{
        return this.carroComprado;
    }

    private setSaldoDisponivel(saldoDisponivel: number) {
        this.saldoDisponivel = saldoDisponivel;
    }

    public getSaldoDisponivel(): number {
        return this.saldoDisponivel;
    }
}
