export default class Perfil{
    
    constructor(
        public id:number,
        public nome: string,
        public cargo: string,
        public email: string,
        public site?: string,
        public facebook?: string
        public foto?: string
    ){
        
    }
}