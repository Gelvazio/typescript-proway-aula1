
const data = {
    "CONTATOS": [
      {
        id:1,
        name:"Mauricio",
        email:"contato@maurcioschmitz.com.br",
        telefone:"33221100",
        tipo:"FAMILIA"}
      ],
    "ALUNOS": [
        {
          id:1,
          nome:"Mauricio",
          cpf:"12345678909",
          telefone:"33221100",
          pai:"Meu Pai",
          mae:"Minha Mãe"}
        ]
  }
  
  const getRepository=(type)=>{
    if(!data[type]){
      data[type] = [];
    }
    return data[type];
  }
  
  const buscarTodos = (type) =>{
    return getRepository(type);
  };
  
  const buscarPorId = (type,id)=>{
    const repository =  getRepository(type);
    const record =repository.find(atual => id == atual.id);
    return record;
  };
  
  const inserir = (type, record)=>{
    record.id = new Date().getTime();
    getRepository(type).push(record);
    
  };
  
  const atualizar = (type,record)=>{
    const id = record.id;
    const current = getRepository(type).find(atual => id == atual.id);
    if(current){
      const value = Object.assign({},current,record); 
      const keys = Object.keys(current) ||[];
      keys.forEach(key => current[key] = value[key]);
    } 
   
  };
  
  const remover = (type, id)=>{
    const repository = getRepository(type);
    data[type] = repository.filter(atual => id != atual.id);
  };
  
  module.exports = {
    buscarTodos,
    buscarPorId,
    inserir,
    atualizar,
    remover
  }