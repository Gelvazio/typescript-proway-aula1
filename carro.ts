export class Carro {
    private marca: string;
    private modelo: string;
    private ano: number;
    private valor: number;
    private  portas: number;
    private motor: string;
    private cor: string;
    
    constructor(marca: string, modelo: string, ano: number, valor: number, portas: number, motor: string, cor: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
        this.portas = portas;
        this.motor = motor;
        this.cor = cor;
    }    

    public getMarca(): string {
        return this.marca;
    }    

    public getModelo(): string {
        return this.modelo;
    }    

    public getAno(): number {
        return this.ano;
    }    

    public getValor(): number {
        return this.valor;
    }    

    public getPortas(): number {
        return this.portas;
    }    

    public getMotor(): string {
        return this.motor;
    }      

    public getCor(): string {
        return this.cor;
    }  
}