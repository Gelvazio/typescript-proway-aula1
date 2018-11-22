export default class Contato
{

    constructor(
        public id?:number,
        public name?: string | null,
        public email?: string,
        public telefone?: string,
        public tipo?: Tipo
    ){
       
    }
}

export enum Tipo{
    PESSOAL = "PESSOAL",
    FAMILIA = "FAMILIA",
    TRABALHO = "TRABALHO",
    OUTROS = "OUTROS",
}