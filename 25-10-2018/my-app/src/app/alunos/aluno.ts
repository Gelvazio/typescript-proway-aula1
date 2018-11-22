export default class Aluno
{

    constructor(
        public id?:number,
        public nome?: string | null,
        public cpf?: string,
        public telefone?: string,
        public pai?: string,
        public mae?: string,
    ){
       
    }
}